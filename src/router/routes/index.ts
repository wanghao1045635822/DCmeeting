import type { RouteRecordNormalized } from 'vue-router';

const modules = import.meta.glob('./modules/*.ts', { eager: true });

// console.log(modules, 'modules');

const externalModules = import.meta.glob('./externalModules/*.ts', {
  eager: true,
});


// console.log(externalModules, 'externalModules');

function formatModules(_modules: any, result: RouteRecordNormalized[]) {
  Object.keys(_modules).forEach((key) => {
    const defaultModule = _modules[key].default;
    if (!defaultModule) return;
    const moduleList = Array.isArray(defaultModule)
      ? [...defaultModule]
      : [defaultModule];
    result.push(...moduleList);
  });
  return result;
}

export const appRoutes: RouteRecordNormalized[] = formatModules(modules, []);

console.log(appRoutes, 'appRoutes');

export const appExternalRoutes: RouteRecordNormalized[] = formatModules(
  externalModules,
  []
);
