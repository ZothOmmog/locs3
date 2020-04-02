var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {

  //В этой функции должно быть обращение к бд
  const stateForEvents = (countEvents) => {
    let str = "Съешь ещё этих сладких французских булок и выпей чаю ";
    let eventInfo = str.repeat(23);

    let Events = []
    for (let i = 0; i < countEvents; i++) {
      Events.push(
        {
          id: i,
          name: `Мероприятие ${i}`,
          type: `Тип мероприятия ${i}`,
          info: eventInfo
        }
      );
    }
    return Events;
  }

  const countEvents = 25;
  const events = stateForEvents(countEvents);
  const resEvents = [];

  //Получаем номер страницы и кол-во мероприятий на 1 странице
  let { page, count } = req.query;

  for(let i = (page === 1 ? 0 : (page - 1) * count); i < (count * page < countEvents ? count * page : countEvents); i++) {
    resEvents.push(events[i]);
  }
  

  res.json({ events: resEvents, countEvents: countEvents });
});

module.exports = router;
