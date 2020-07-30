import { Page } from './models';
import { UserInputError } from 'apollo-server-express';

export default {
  Query: {
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
      return Page.find({}).exec();
    }
  }
};