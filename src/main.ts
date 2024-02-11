import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app/app.module";

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => {
    // eslint-disable-next-line no-console
    console.error(err);
  });

// TODO: поправить отступы на форме логина (между лого и инпутами, между инпутами, над кнопкой, в сообщениях об ошибках)
// TODO: уменьшить шрифт ошибок
// TODO: увеличить шрифт sign up
// TODO: добавить prettier в package.json и package-lock.json
// TODO: заменить кавычки на двойные
