import { defineStore } from "pinia";
import type { UserType } from "./type";
import { ImitateHttp } from "@/untils";
const userStore = defineStore("user", {
  state: () => ({
    userInfo: null as UserType | null,
  }),
  actions: {
    setUser(user: UserType) {
      this.userInfo = user;
      localStorage.setItem("login_user", JSON.stringify(user));
    },
    //注册
    register(form: UserType) {
      return ImitateHttp((s, f) => {
        form.user_id = parseInt(form.phone.slice(-4));
        localStorage.setItem("regis_user", JSON.stringify(form));
        s("ok");
      });
    },
    //登录
    login(form: UserType) {
      let regis = localStorage.getItem("regis_user");
      return ImitateHttp((s, f) => {
        if (!regis) {
          f("用户未注册");
        } else {
          let user: UserType = JSON.parse(regis);
          if (user.phone == form.phone && user.password == form.password) {
            this.setUser(user);
            s("登录成功");
          } else {
            s("手机号或密码错误");
          }
        }
      });
    },
  },
});
export default userStore;
