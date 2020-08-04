import { Page, Component } from './models';
import { UserInputError } from 'apollo-server-express';

const getComponentTree = async id => {
  const component = await Component.findOne({_id: id});
  console.log(`getComponentTree(${id})`);
  if (component.children.length > 0) {
    console.log('Component has children');
    component.children = component.children.map(async childId => {
      return await getComponentTree(childId);
    });
  }
  return component;
}

export default {
  Query: {
    __resolveType(obj, context, info){
      if(typeof obj === string){
        return 'String';
      }
      else if (obj.type) {
        return 'Component';
      }
      return null;
    },
    test() {
      return "Hello world!";
    },
    addPage( _, { title }) {
      return new Promise(async resolve => {
        const existingPages = await Page.find({ title: title}).exec();
        if (!existingPages || existingPages.length === 0) {
          const pageData = {
            title: title,
            data: '',
            components: [],
          };
          await Page.create(pageData);
          resolve(pageData);
        } else {
          resolve(Promise.reject(new UserInputError("Page already exists")));
        }
      });
    },
    pageList() {
      return new Promise(async resolve => {
        const pages = await Page.find({}).exec();
        const pageList = [];
        pages.map(async page => {
          const pageData = { ...page._doc };
          if (page && page.components && page.components.length > 0) {
            pageData.components = await page.components.map(async id => {
              return await getComponentTree(id);
            });
          }
          pageList.push(pageData);
        });
        resolve(pageList);
      });
    },
    updatePage(_, pageData) {
      return new Promise(async resolve => {
        console.log('Update Page: ', pageData);
        const page = await Page.findOneAndUpdate(
          { _id: pageData._id },
          pageData,
          { new: true }
        );
        console.log(page);
        let newPageData;
        if (page) {
          newPageData = { ...page._doc };
          if (page.components && page.components.length > 0) {
            newPageData.components = await page.components.map(async id => {
              return await getComponentTree(id);
            });
          }
        }
        console.log(newPageData);
        resolve(newPageData);
      });
    },
    addComponent( _, { title, type }) {
      return new Promise(async resolve => {
        const existingComponent = await Component.find({ title: title}).exec();
        if (!existingComponent || existingComponent.length === 0) {
          const pageData = {
            title: title,
            type: type,
            props: '',
            children: [],
            content: '',
          };
          await Component.create(pageData);
          resolve(pageData);
        } else {
          resolve(Promise.reject(new UserInputError("Component already exists")));
        }
      });
    },
    componentList() {
      return new Promise(async resolve => {
        const components = await Component.find({}).exec();
        const populatedList = await components.map(async component => {
          if(component.children.length > 0) {
            component.children = await component.children.map(async id => await getComponentTree(id));
          }
          return component;
        });
        resolve(populatedList);
      });
    },
    updateComponent(_, componentData) {
      return new Promise(async resolve => {
        const component = await Component.findOneAndUpdate(
          { _id: componentData._id },
          componentData,
          { new: true }
        );
        if (component && component.children.length > 0) {
          component.children = component.children.map(async id => {
            return await Component.findOne({_id: id});
          });
        }
        resolve(component);
      });
    },
  }
};