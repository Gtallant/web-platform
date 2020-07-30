import { Page } from './models';

export default {
  Query: {
    test() {
      return "Hello world!";
    },
    addPage( _, { title }) {
      return new Promise(resolve => {
        const pageData = {
          title: title,
          data: '',
          components: [],
        };
        new Page(pageData).save(err => {
          if (err) {
            resolve(err);
          }
          resolve(pageData);
        });
      });
    },
    pageList() {
      return Page.find({}).exec();
    }
  }
};