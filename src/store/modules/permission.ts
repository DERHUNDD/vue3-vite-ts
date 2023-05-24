// import { cloneDeep } from 'lodash';
import { defineStore } from 'pinia';
import { constantRouterMap } from '@/routes/baseRouter';

// const AllUI = 'ALL_UI'; // 运行所以UI放行
// /**
//  * 过滤账户是否拥有某一个权限，并将菜单从加载列表移除,
//  * 在permission中未配置权限数组则全部可以访问
//  * @param permission
//  * @param route
//  * @returns {boolean}
//  */
// function hasPermission(permission: any, route: any) {
//   // console.log('permission :>> ', permission)
//   if (route.meta && route.meta.permission) {
//     let flag = false;
//     for (let i = 0, len = permission.length; i < len; i++) {
//       flag = route.meta.permission.includes(permission[i]);
//       if (flag || permission[i] === AllUI) {
//         return true;
//       }
//     }
//     return false; // TODO权限启用后要变false
//   }
//   return true;
// }
// function filterAsyncRouter(routerMap: [], permissionList: []) {
//   const accessedRouters = routerMap.filter((route: { children: [] }) => {
//     if (hasPermission(permissionList, route)) {
//       if (route.children && route.children.length) {
//         route.children = filterAsyncRouter(route.children, permissionList);
//       }
//       return true;
//     }
//     return false; // TODO权限启用后要变false
//   });
//   return accessedRouters;
// }

// defineStore 第一个参数是id，必需且值唯一
export const useUserStore = defineStore('permission', {
  //state返回一个函数，防止作用域污染
  state: () => {
    return {
      routers: constantRouterMap,
      addRouters: [],
      menus: [], // 菜单
    };
  },
  getters: {
    getAddRouters: (state) => state.addRouters,
    getRouters: (state) => state.routers,
    getMenus: (state) => state.menus,
  },
  actions: {
    setRouters(routers: []) {
      this.addRouters = routers;
      this.routers = constantRouterMap.concat(routers);
    },
    setMenu(menus: []) {
      this.menus = menus;
    },
    // 生成路由
    // GenerateRoutes(permissionList: []) {
    //   const routerMap = cloneDeep(asyncRouterMap);
    //   const accessedRouters = filterAsyncRouter(routerMap, permissionList);
    //   this.setRouters;
    // },
  },
});
