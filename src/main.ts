import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app/app.module";


platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => { console.error(err); }); // eslint-disable-line no-console


// TODO: затемнить картинку на логине
// TODO: добавить box-shadow как на фигме
// TODO: поправить отступы на форме логина (между лого и инпутами, между инпутами, над кнопкой, в сообщениях об ошибках)
// TODO: уменьшить шрифт ошибок
// TODO: увеличить шрифт sign up
// TODO: добавить prettier в package.json и package-lock.json
// TODO: заменить кавычки на двойные
