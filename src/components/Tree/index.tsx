import cn from 'classnames';
import React, { useEffect, useState } from 'react';

import { addTreeId } from './utils';

import './style.scss';

export const TREE_ID = 'treeId';

interface ITreeNodeObject {
  [nodeName: string]: any;
}

interface ITreeProps extends ITreeNodeObject {}

const Tree = ({ data }: ITreeProps) => {
  const [expandedValues, setExpandedValues] = useState<string[]>([]);
  const [treeIdList, setTreeIdList] = useState<string[]>([]);
  const [modifiedData, setModifiedData] = useState<{ [key: string]: any }>({});

  useEffect(() => {
    const { modifiedData, treeIdList } = addTreeId(data);
    setModifiedData(modifiedData);
    setTreeIdList(treeIdList);
  }, [data]);

  const changeExpandedValues = (value: Maybe<string>) => {
    if (!value) {
      return null;
    }
    const newExpandedValues = [...expandedValues];
    const valueIdx = newExpandedValues.indexOf(value);
    if (valueIdx !== -1) {
      newExpandedValues.splice(valueIdx, 1);
    } else {
      newExpandedValues.push(value);
    }
    setExpandedValues(newExpandedValues);
  };

  const renderObject = (obj: any, level: number) => {
    const res = Object.keys(obj).map(key => {
      if (key === TREE_ID) {
        return null;
      }
      const value = obj[key];
      const isObj = value instanceof Object;
      const treeId = isObj && obj[key][TREE_ID];
      const isExpanded = isObj && expandedValues.includes(treeId);
      const mark = isObj ? (isExpanded ? '-' : '+') : '';
      const valueText = value === null
        ? 'null'
        : value;
      return (
        <div style={{ marginLeft: `${level + 1}rem` }} key={key}>
          <div
            className={cn('tree-row', { pointer: isObj })}
            onClick={() => treeId && changeExpandedValues(treeId)}
          >
            <div className={'expanded-mark'}>{mark}</div>
            <div>{key}</div>
            {!isObj && <div className="tree-row-value">{valueText}</div>}
          </div>
          {isObj && isExpanded && <div>{renderObject(obj[key], level + 1)}</div>}
        </div>
      );
    });
    return <div>{res}</div>;
  };

  const isSomeNodeCollapsed = treeIdList.length > expandedValues.length;
  const btnText = isSomeNodeCollapsed ? 'expand all' : 'collapse all';

  const btnOnClick = () => {
    const values = isSomeNodeCollapsed ? treeIdList : [];
    setExpandedValues(values);
  };

  return (
    <div className="tree-wrapper">
      <div onClick={btnOnClick} className="expand-all-btn">
        {btnText}
      </div>
      {renderObject(modifiedData, 0)}
    </div>
  );
};

export default Tree;
