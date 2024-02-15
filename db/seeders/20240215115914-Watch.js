'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Watches',
      [{
        name: 'Tourbillon Cardan',
        seria: 'forHim',
        description: 'Модель Tourbillon Cardan задумана с прицелом на еще более высокую хронометрическую точность. В ней объединены три особенности. Во-первых, сам турбийон. Этот механизм, запатентованный Абрахамом-Луи Бреге в 1801 году, был разработан с целью компенсировать различия в точности хода, вызванные вертикальным положением часов. Но для Greubel Forsey это не завершенное творение, а лишь отправная точка.',
        photo1: 'http://localhost:3000/uploads/47141280df5cd8d7407243ac8f059131be09da39-greubel-forsey-tourbillon-cardan-07.jpg',
        photo2: 'http://localhost:3000/uploads/a6882af30c17cdc91903f41684f59fc23fb12e50-greubel-forsey-tourbillon-cardan-01.jpg',
        photo3: 'http://localhost:3000/uploads/df4f8234cd5c5ed9e976673e3f9b8c4a68fa8996-greubel-forsey-tourbillon-cardan-04.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'G-SHOCK GWG-1000',
        seria: 'forHim',
        description: 'При создании модели G-SHOCK GWG-1000 были учтены экстремальные ситуации, с которыми сталкиваются владельцы часов в суровых условиях пустыни. Mudmaster. Питание от солнечной энергии Tough Solar - солнечные батарейки большой мощности, индикатор заряда батареи. Функция автоматического сохранения энергии. Время работы аккумулятора без подзарядки до 6 месяцев, при включенной функции сохранения энергии до 25 месяцев.',
        photo1: 'http://localhost:3000/uploads/GWG-1000-1A3.jpg',
        photo2: 'http://localhost:3000/uploads/GWG-1000-1A3__7.jpg',
        photo3: 'http://localhost:3000/uploads/GWG-1000-1A3__1.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Honoris',
        seria: 'forHer',
        description: 'Название самой модели – Honoris – было выбрано как дань уважения одному из творений его предка, запатентованному в 1889 г., – карманным часам с 8-дневным запасом хода, известным под названием Hebdomas.',
        photo1: 'http://localhost:3000/uploads/1693027393_971_haute-rive-debuts-with-the-honoris-and-a-1000-hour-power-reserve.jpg',
        photo2: 'http://localhost:3000/uploads/1693027394_104_haute-rive-debuts-with-the-honoris-and-a-1000-hour-power-reserve.jpg',
        photo3: 'http://localhost:3000/uploads/haute-rive-debuts-with-the-honoris-and-a-1000-hour-power-reserve.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Emerald',
        seria: 'forHer',
        description: 'Деревянные наручные часы ручной работы «Emerald» от Timbersun Материал корпуса: Эбеновое дерево. Материал ремешка: Эбеновое дерево .Вид дерева: Массив. Корпус и ремешок изготовлены из массива чёрного эбенового дерева. Из эбенового чёрного дерева африканские шаманы создавали защитные обереги и талисманы. Элитная древесина, в 2 раза плотнее могучего дуба, маслянистая, стойкая к любым атмосферным явлениям, гниению и порче насекомыми. Внутри установлен надёжный японский кварцевый механизм Miyota. Каждое изделие уникально своим древесным рисунком, и может не в точности совпадать с изделием на фото, а также размеры могут отличаться на 1-2 мм от одного экземпляра к другому.',
        photo1: 'http://localhost:3000/uploads/f47871500f0f108eeb11d7750erw--ukrasheniya-emerald-naruchnye-chasy-iz-dereva-ruchnaya-rabota.jpg',
        photo2: 'http://localhost:3000/uploads/bd160502f061a16ed0375660b1hy--ukrasheniya-emerald-naruchnye-chasy-iz-dereva-ruchnaya-rabota.jpg',
        photo3: 'http://localhost:3000/uploads/b185c91288e7a4633220bac1be5y--ukrasheniya-emerald-naruchnye-chasy-iz-dereva-ruchnaya-rabota.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Watches', null, {});
  },
};
