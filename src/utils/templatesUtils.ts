import { Category, data, Template } from '../data';

const getAllTemplates = (data: Category[]) => {
  const stack: any[] = [];
  const array: Template[] = [];
  data.forEach((c) => stack.push(c));

  while (stack.length !== 0) {
    const node = stack.pop();
    if (node.children === undefined) {
      array.push(node);
    } else {
      for (var i = node.children?.length - 1; i >= 0; i--) {
        stack.push(node.children[i]);
      }
    }
  }

  return array;
};

const countCategories = (data: Category[]) => {
  const stack: any[] = [];
  data.forEach((c) => stack.push(c));
  let count = 0;

  while (stack.length !== 0) {
    const node = stack.pop();
    if (node.children !== undefined && node.children.length > 0) {
      count += 1;
      console.log(`Node ${node.name} has children! Total categories: ${count}`);
      node.children.forEach((c: any) => {
        if (c.children !== undefined && c.children.length > 0) {
          stack.push(c);
        }
      });
    }
  }

  return count;
};

export const templatesList = getAllTemplates(data);
export const categoriesNumber = countCategories(data);
