### Структура

src/app/ — основной Angular-код:

app.module.ts — главный модуль, настраивает стратегию переиспользования маршрутов через MicroFrontendRouteReuseStrategy.
app-routing.module.ts — маршрутизация: пути /vue-app и /react-app загружают SpaHostModule с данными о приложении.
spa-host/ — компонент SpaHostComponent, который монтирует/размонтирует микрофронтенд через SingleSpaService и защищён guard'ом SpaUnmountGuard.
src/single-spa/ — интеграция с single-spa:

single-spa.service.ts — сервис для монтирования/размонтирования микрофронтендов.
route-reuse-strategy.ts — стратегия Angular для работы с single-spa.
import-map.json — карта импортов для SystemJS: указывает, где искать микрофронтенды (Vue, React).

main.ts — точка входа, запускает single-spa и Angular.

Как работает
Запуск: Angular стартует, single-spa активируется.
Маршрутизация: При переходе на /vue-app или /react-app Angular загружает SpaHostComponent.
Монтирование микрофронтенда: SpaHostComponent через SingleSpaService импортирует и монтирует соответствующий микрофронтенд (Vue или React) в контейнер.
Размонтирование: При уходе с маршрута guard SpaUnmountGuard вызывает размонтирование микрофронтенда.
Импорт картой: SystemJS использует import-map.json для загрузки нужных JS-файлов микрофронтендов.
Для чего
Это контейнер для микрофронтендов: позволяет интегрировать приложения на разных фреймворках (Vue, React) в один Angular shell, управлять их жизненным циклом и маршрутизацией.