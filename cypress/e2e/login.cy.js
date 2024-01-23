describe('Автотесты на форму логина', function () {
    it('Верный логин верный пароль', function () {
         cy.visit('https://login.qa.studio/');  // посетили сайт
         cy.get("#mail").type('german@dolnikov.ru'); // ввели логин
         cy.get("#pass").type('iLoveqastudio1');    // ввели пароль
         cy.get("#loginButton").click();        // нажали войти
         cy.get("#messageHeader").should('be.visible')    // проверка что текст виден
         cy.get("#messageHeader").contains('Авторизация прошла успешно');   // совп. текст
         cy.get("#exitMessageButton > .exitIcon").should('be.visible');  // прроверка на наличие крестика
     })
 
    it('Функция Забыл пароль', function () {
         cy.visit('https://login.qa.studio/');  // посетили сайт
         cy.get("#forgotEmailButton").click(); // нажали забыл пароль
         cy.get("#mailForgot").type('iLoveqastudio15');    // ввели неверный пароль
         cy.get("#restoreEmailButton").click();        // нажали отправить код
         cy.get("#messageHeader").should('be.visible');    // проверка что текст виден
         cy.get("#messageHeader").contains('Нужно исправить проблему валидации');  //проверка что текст совп.
         cy.get("#exitMessageButton > .exitIcon").should('be.visible'); // проверак присутствия крестика
     })
 
    it('Правильный логин и неверный пароль', function () {
         cy.visit('https://login.qa.studio/');  // посетили сайт
         cy.get("#mail").type('german@dolnikov.ru');   // ввести правильный логин
         cy.get("#pass").type('iLoveqastudio15');  // ввели неверный пароль
         cy.get("#loginButton").click(); // нажать войти
         cy.get("#messageHeader").should('be.visible');    // проверка что текст виден
         cy.get("#messageHeader").contains('Такого логина или пароля нет');  //проверка что текст совп.
         cy.get("#exitMessageButton > .exitIcon").should('be.visible'); // проверка присутствия крестика
     })

    it('Неверный логин и верный пароль', function () {
         cy.visit('https://login.qa.studio/');  // посетили сайт
         cy.get("#mail").type('german@dolnikov.russkiy');   // ввести неправильный логин
         cy.get("#pass").type('iLoveqastudio1');  // ввели верный пароль
         cy.get("#loginButton").click(); // нажать войти
         cy.get("#messageHeader").should('be.visible');    // проверка что текст виден
         cy.get("#messageHeader").contains('Такого логина или пароля нет');  //проверка что текст совп.
         cy.get("#exitMessageButton > .exitIcon").should('be.visible'); // проверка присутствия крестика
     })

    it('Логин без @ и верный пароль', function () {
         cy.visit('https://login.qa.studio/');  // посетили сайт
         cy.get("#mail").type('germandolnikov.russkiy');   // ввести логин без @
         cy.get("#pass").type('iLoveqastudio1');  // ввели верный пароль
         cy.get("#loginButton").click(); // нажать войти
         cy.get("#messageHeader").should('be.visible');    // проверка что текст виден
         cy.get("#messageHeader").contains('Нужно исправить проблему валидации');  //проверка что текст совп.
        
     })

        it('Приведение к строчным буквам в логине', function () {
         cy.visit('https://login.qa.studio/');  // посетили сайт
         cy.get("#mail").type('GerMan@Dolnikov.ru');   // ввести логин
         cy.get("#pass").type('iLoveqastudio1');  // ввели верный пароль
         cy.get("#loginButton").click(); // нажать войти
         cy.get("#messageHeader").should('be.visible');    // проверка что текст виден
         cy.get("#messageHeader").contains('Авторизация успешна');  //проверка что текст совп.
         cy.get("#exitMessageButton > .exitIcon").should('be.visible');
     })

 })