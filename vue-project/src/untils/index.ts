import dayts from "dayjs";
export const FormatTime = (data: Date | string) => {
  return dayts(data).format("YYYY/MM/DD HH:mm");
};
//获取localStorage
export const localGetItem = (key: string): any => {
  let data_str = localStorage.getItem(key);
  if (data_str) {
    return JSON.parse(data_str); //反序列化数据
  }
  return null;
};
//设置localStorage
export const localSetItem = (key: string, value: any): void => {
  localStorage.setItem(key, JSON.stringify(value)); //序列化数据
};
export const geneId = (): number => {
  return Math.floor(Math.random() * 939874);
};
//模拟HTTP请求
export const ImitateHttp = (
  fun: (s: Function, f: Function) => void,
  timer = 1000
) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => fun(resolve, reject), timer);
  });
};
