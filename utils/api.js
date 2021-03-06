/**
 * 封装前端接口
 */

import Checkenv from "../middleware/checkenv";
import Net from "./net";


export default class  {

  /**
   * 文章列表
   */
  static newslist(){
    return Net.getJSON(Checkenv.url.api + "/newslist/");
  }

  /**
   * 删除文章
   */
  static newsDelet(Id){
    return Net.getJSON(Checkenv.url.api + "/newsdelet/" + Id);
  }

  /**
   * 创建文章
   */
  static newsEdit(data){
    return Net.postJSON(Checkenv.url.api + "/newsedit/", {}, data);
  }

  /**
   * 修改文章
   */
  static reEdit(Id, data){
    return Net.postJSON(Checkenv.url.api + "/newsedit/" + Id, {}, data);
  }

  /**
   * 获取单个文章
   */
  static newsOne(Id){
    return Net.getJSON(Checkenv.url.api + "/newsone/" + Id);
  }



}
