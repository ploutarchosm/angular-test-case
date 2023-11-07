ENG You don't need to complete all tasks, only do the ones you are confident you can do well.

## General Data

Primary colors - #435261, #8676b6. Page background - white. Links - #2d6fb1. Base font size - 14px.

You can install any necessary npm packages.

## Navigation, Main Menu

Display the main menu, consisting of the following items: Home, Inventory, Reports, Billing, Profile. Each menu item should lead to its respective section, placed in a separate module. The modules should load dynamically. Inside each section, there should be a page with a title.
The menu should respond to hover, and the selected menu item should be highlighted.

## Header

Display a header that is common to all pages. Include a Logout link (without functionality) and user information:
Current First Name, Last Name
Profile link
If desired, you can add icons to the profile and Logout links.

## Profile

Add a page for editing the user's profile. The page should contain a form with the following fields:

-   Email - readonly
-   First name - required, not longer than 255 characters
-   Last name - required, not longer than 255 characters
-   Phone number - required, 10 characters. "+7" is not entered by the user but is automatically added.
-   WebSite URL - optional, valid URL

Read and write data from/to the API should be emulated in a separate service.

## Feedback on Profile Update

Format the display of validation errors from the form as red "cloud" pop-ups to the right of the input fields.
Upon successful profile update, display a message in the header.

Emulate an API error for a specific set of data (e.g., a First Name with a length of one character). Display this error in the same area as the success message for profile update.

Hide success messages automatically after 30 seconds. Error messages should be removed when the user clicks on the close icon (e.g., a cross) of the message.

## Authorization

Divide the application into two modules - one for unauthorized users (auth) and one for users who have successfully logged in (app). Prohibit unauthorized users from viewing pages belonging to the app module.

Add a login form and emulate requests-responses to the API - both successful and for incorrect login-password pairs.

Upon login, assign a role to the user (you can choose randomly from a predefined set).

Authorization should persist after page refresh/closure.

---

RU !Не обязательно выполнять все задания, выполните те, которые сделаете уверенно хорошо.

## Общие данные

Основные цвета - #435261, #8676b6. Фон страницы - белый. Ссылки - #2d6fb1. Базовый размер шрифта - 14px;

Можно устанавливать любые необходимые npm-пакеты.

## 1. Навигация, главное меню.

Вывести главное меню, состоящее из пунктов: Home, Inventory, Reports, Billing, Profile. С каждого пункта меню должен быть переход в соответствующий раздел, вынесенный в отдельный модуль. Модули должны подгружаться динамически. Внутри каждого раздела - страница с заголовком.

Меню должно реагировать на наведение, выбранный пункт меню - выделяться.

## 2. Header

Вывести общий для всех страниц header. В нем разместить ссылку Logout (без функционала) и информацию о пользователе:

-   текущие First Name, Last Name
-   ссылка на профиль

При желании к ссылке профиля и/или Logout можно добавить иконки.

## 3. Профиль

Добавить страницу для редактирования профиля пользователя. На странице должна быть форма с полями:

-   Email - readonly;
-   First name - обязательное, не длиннее 255 символов;
-   Last name - обязательное, не длиннее 255 символов;
-   Phone number - обязательное, 10 символов. "+7" пользователем не вводится, а подставляется автоматически;
-   WebSite URL - необязательное, валидный URL.

Чтение и заппись данных из/в API - эмулировать в отдельном сервисе.

## 4 Обратная связь при обновлении профиля.

-   Оформить вывод валидационных ошибок формы как всплывающие справа от полей ввода "облачка" красного цвета.
-   При успешном обновлении профиля показывать сообщение об этом в Header.
-   Эмулировать для определенного набора данных (например, First Name длиной в один символ) возврат ошибки от API. Отобразить её в той же области, что и сообщение об успехе обновления профиля.
-   Сообщения об успехе скрывать автоматически через 30 секунд. Сообщения об ошибке должны удаляться после клика пользователя на иконку закрытия (крестик, например) этого сообщения.

## 5. Авторизация

Разделить приложение на два модуля - для неавторизованных пользователей (auth) и пользователей, успешно прошедших авторизацию (app). Запретить неавторизованным пользователям просматривать страницы, относящиеся к модулю app.

Добавить форму для логина; эмулировать запросы-ответы к API - как успешные, так и для некорректной пары логин-пароль.

При логине выдавать пользователю роль (можно случайную из некоторого набора).

Авторизация должна сохраняться при обновлении/закрытии страницы.
