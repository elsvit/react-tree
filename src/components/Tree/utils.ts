import { TREE_ID } from './index';

export const addTreeId = (obj: any, id: string = 'root', treeIds: string[] = []) => {
  const modifiedData = { ...obj } as { [key: string]: any };
  let treeIdList = treeIds;
  Object.keys(obj).forEach((key, idx) => {
    const keyObj = modifiedData[key];
    if (keyObj instanceof Object) {
      const treeId = `${id}-${idx}`;
      treeIdList.push(treeId);
      modifiedData[key] = { ...addTreeId(keyObj, treeId, treeIdList).modifiedData };
      modifiedData[key][TREE_ID] = treeId;
    }
  });
  return { modifiedData, treeIdList };
};
