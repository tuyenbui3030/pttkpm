"use strict";
const { v4: uuidv4 } = require("uuid");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    const date = new Date();
    // const data = [
    //   {
    //     uuid: "9b52a2c6-4558-46de-ae71-485d8b17949a",
    //     movieId: 1,
    //     roomId: 1,
    //     slot: 1,
    //     timeStart: "2021-08-24 07:00:00.000+07",
    //     timeEnd: "2021-08-24 09:00:00.000+07",
    //     price: 5,
    //     createdAt: date,
    //     updatedAt: date,
    //   },
    //   {
    //     uuid: uuidv4(),
    //     movieId: 1,
    //     roomId: 1,
    //     slot: 2,
    //     timeStart: "2021-08-24 09:00:00.000+07",
    //     timeEnd: "2021-08-24 11:00:00.000+07",
    //     price: 5,
    //     createdAt: date,
    //     updatedAt: date,
    //   },
    //   {
    //     uuid: uuidv4(),
    //     movieId: 1,
    //     roomId: 1,
    //     slot: 3,
    //     timeStart: "2021-08-24 11:00:00.000+07",
    //     timeEnd: "2021-08-24 13:00:00.000+07",
    //     price: 5,
    //     createdAt: date,
    //     updatedAt: date,
    //   },
    // ];
    const data = [
      {
        uuid: "f544a2ce-71eb-4f40-94ec-1e0307a54748",
        movieId: 1,
        roomId: 3,
        slot: 1,
        timeStart: "2021-09-02T00:00:00.000Z",
        timeEnd: "2021-09-02T02:00:00.000Z",
        price: 10,
        createdAt: "2021-08-25T15:17:29.617Z",
        updatedAt: "2021-08-25T15:17:29.617Z",
      },
      {
        uuid: "059ef6d5-7b23-461c-b8f2-e935838f4a45",
        movieId: 1,
        roomId: 2,
        slot: 3,
        timeStart: "2021-09-06T04:00:00.000Z",
        timeEnd: "2021-09-06T06:00:00.000Z",
        price: 7,
        createdAt: "2021-08-25T15:21:52.122Z",
        updatedAt: "2021-08-25T15:21:52.122Z",
      },
      {
        uuid: "9dd47b1f-9bde-4294-8034-f215c7daa577",
        movieId: 1,
        roomId: 5,
        slot: 4,
        timeStart: "2021-09-05T06:00:00.000Z",
        timeEnd: "2021-09-05T08:00:00.000Z",
        price: 7,
        createdAt: "2021-08-25T15:22:45.581Z",
        updatedAt: "2021-08-25T15:22:45.581Z",
      },
      {
        uuid: "d88311fc-546b-4cfa-aeda-4afa9e299100",
        movieId: 1,
        roomId: 6,
        slot: 8,
        timeStart: "2021-09-02T14:00:00.000Z",
        timeEnd: "2021-09-02T16:00:00.000Z",
        price: 10,
        createdAt: "2021-08-25T15:23:23.621Z",
        updatedAt: "2021-08-25T15:23:23.621Z",
      },
      {
        uuid: "faf1908d-6a10-44e1-a56a-14cb540c7ce8",
        movieId: 2,
        roomId: 6,
        slot: 2,
        timeStart: "2021-09-02T02:00:00.000Z",
        timeEnd: "2021-09-02T04:00:00.000Z",
        price: 6,
        createdAt: "2021-08-25T15:29:53.459Z",
        updatedAt: "2021-08-25T15:29:53.459Z",
      },
      {
        uuid: "0393ce79-7c22-409d-9689-c0641b7bfcee",
        movieId: 2,
        roomId: 2,
        slot: 1,
        timeStart: "2021-09-04T00:00:00.000Z",
        timeEnd: "2021-09-04T02:00:00.000Z",
        price: 5,
        createdAt: "2021-08-25T15:19:56.869Z",
        updatedAt: "2021-08-25T15:19:56.869Z",
      },
      {
        uuid: "4834c0ab-479a-4f83-9091-f09051ee717b",
        movieId: 2,
        roomId: 4,
        slot: 2,
        timeStart: "2021-09-04T02:00:00.000Z",
        timeEnd: "2021-09-04T04:00:00.000Z",
        price: 6,
        createdAt: "2021-08-25T15:30:18.029Z",
        updatedAt: "2021-08-25T15:30:18.029Z",
      },
      {
        uuid: "d8e4bf06-6040-4a36-ad21-ddee080116e3",
        movieId: 3,
        roomId: 2,
        slot: 8,
        timeStart: "2021-09-04T14:00:00.000Z",
        timeEnd: "2021-09-04T16:00:00.000Z",
        price: 4,
        createdAt: "2021-08-25T15:20:37.273Z",
        updatedAt: "2021-08-25T15:20:37.273Z",
      },
      {
        uuid: "fab96bef-dab1-4ac3-b1c2-93234317f4cf",
        movieId: 3,
        roomId: 3,
        slot: 3,
        timeStart: "2021-09-02T04:00:00.000Z",
        timeEnd: "2021-09-02T06:00:00.000Z",
        price: 10,
        createdAt: "2021-08-25T15:34:15.993Z",
        updatedAt: "2021-08-25T15:34:15.993Z",
      },
      {
        uuid: "f8351a9d-b2df-41ef-b4f5-cc24350cb075",
        movieId: 4,
        roomId: 2,
        slot: 2,
        timeStart: "2021-09-02T02:00:00.000Z",
        timeEnd: "2021-09-02T04:00:00.000Z",
        price: 4,
        createdAt: "2021-08-25T15:35:59.248Z",
        updatedAt: "2021-08-25T15:35:59.248Z",
      },
      {
        uuid: "cb0f82b8-edba-4314-8314-183931a89c6d",
        movieId: 5,
        roomId: 5,
        slot: 6,
        timeStart: "2021-09-02T10:00:00.000Z",
        timeEnd: "2021-09-02T12:00:00.000Z",
        price: 12,
        createdAt: "2021-08-25T15:36:53.329Z",
        updatedAt: "2021-08-25T15:36:53.329Z",
      },
      {
        uuid: "8de26be1-1982-4816-894f-413bfe8cb45a",
        movieId: 5,
        roomId: 2,
        slot: 3,
        timeStart: "2021-09-02T04:00:00.000Z",
        timeEnd: "2021-09-02T06:00:00.000Z",
        price: 10,
        createdAt: "2021-08-25T15:37:13.509Z",
        updatedAt: "2021-08-25T15:37:13.509Z",
      },
      {
        uuid: "e1711c81-1d24-4826-996d-5c430c2396da",
        movieId: 5,
        roomId: 2,
        slot: 2,
        timeStart: "2021-09-03T02:00:00.000Z",
        timeEnd: "2021-09-03T04:00:00.000Z",
        price: 10,
        createdAt: "2021-08-25T15:37:52.949Z",
        updatedAt: "2021-08-25T15:37:52.949Z",
      },
      {
        uuid: "35e87d39-8e41-4725-8c5f-45a2aff87416",
        movieId: 6,
        roomId: 3,
        slot: 3,
        timeStart: "2021-09-03T04:00:00.000Z",
        timeEnd: "2021-09-03T06:00:00.000Z",
        price: 5,
        createdAt: "2021-08-25T15:41:21.934Z",
        updatedAt: "2021-08-25T15:41:21.934Z",
      },
      {
        uuid: "e8106b8f-a93d-4192-97e6-34037f7d5760",
        movieId: 6,
        roomId: 5,
        slot: 2,
        timeStart: "2021-09-03T02:00:00.000Z",
        timeEnd: "2021-09-03T04:00:00.000Z",
        price: 8,
        createdAt: "2021-08-25T15:41:46.281Z",
        updatedAt: "2021-08-25T15:41:46.281Z",
      },
      {
        uuid: "b540830b-79cb-4d4b-a25e-943f0c3e69c6",
        movieId: 6,
        roomId: 6,
        slot: 7,
        timeStart: "2021-09-05T12:00:00.000Z",
        timeEnd: "2021-09-05T14:00:00.000Z",
        price: 5,
        createdAt: "2021-08-25T15:42:17.078Z",
        updatedAt: "2021-08-25T15:42:17.078Z",
      },
      {
        uuid: "ac018abe-7fc3-4289-91c2-f3d3cf980d4d",
        movieId: 7,
        roomId: 2,
        slot: 7,
        timeStart: "2021-09-06T12:00:00.000Z",
        timeEnd: "2021-09-06T14:00:00.000Z",
        price: 10,
        createdAt: "2021-08-25T15:44:01.362Z",
        updatedAt: "2021-08-25T15:44:01.362Z",
      },
      {
        uuid: "40ba61af-5d99-4d50-a7e5-33c736a9e317",
        movieId: 7,
        roomId: 6,
        slot: 2,
        timeStart: "2021-09-06T02:00:00.000Z",
        timeEnd: "2021-09-06T04:00:00.000Z",
        price: 10,
        createdAt: "2021-08-25T15:44:19.931Z",
        updatedAt: "2021-08-25T15:44:19.931Z",
      },
      {
        uuid: "419a3206-fbc2-4ebc-a4ba-06924345692d",
        movieId: 7,
        roomId: 6,
        slot: 3,
        timeStart: "2021-10-08T04:00:00.000Z",
        timeEnd: "2021-10-08T06:00:00.000Z",
        price: 10,
        createdAt: "2021-08-25T15:44:50.433Z",
        updatedAt: "2021-08-25T15:44:50.433Z",
      },
      {
        uuid: "631a5749-4bca-44bb-afbd-a0e92d19b6ad",
        movieId: 8,
        roomId: 5,
        slot: 8,
        timeStart: "2021-09-05T14:00:00.000Z",
        timeEnd: "2021-09-05T16:00:00.000Z",
        price: 10,
        createdAt: "2021-08-25T15:56:00.171Z",
        updatedAt: "2021-08-25T15:56:00.171Z",
      },
      {
        uuid: "16a92112-c283-4258-a5cb-35125fb72228",
        movieId: 8,
        roomId: 5,
        slot: 7,
        timeStart: "2021-09-06T12:00:00.000Z",
        timeEnd: "2021-09-06T14:00:00.000Z",
        price: 10,
        createdAt: "2021-08-25T15:56:34.592Z",
        updatedAt: "2021-08-25T15:56:34.592Z",
      },
      {
        uuid: "88ba7bc6-1621-4f4a-a5f4-535d5ec46ee7",
        movieId: 8,
        roomId: 1,
        slot: 2,
        timeStart: "2021-09-05T02:00:00.000Z",
        timeEnd: "2021-09-05T04:00:00.000Z",
        price: 10,
        createdAt: "2021-08-25T15:57:14.891Z",
        updatedAt: "2021-08-25T15:57:14.891Z",
      },
      {
        uuid: "2cfb0061-62a7-4b65-b5be-696d2c584933",
        movieId: 9,
        roomId: 7,
        slot: 3,
        timeStart: "2021-09-05T04:00:00.000Z",
        timeEnd: "2021-09-05T06:00:00.000Z",
        price: 10,
        createdAt: "2021-08-25T15:59:29.577Z",
        updatedAt: "2021-08-25T15:59:29.577Z",
      },
      {
        uuid: "87ea47f5-4b9e-416d-b2c0-565e569c171c",
        movieId: 10,
        roomId: 7,
        slot: 3,
        timeStart: "2021-09-04T04:00:00.000Z",
        timeEnd: "2021-09-04T06:00:00.000Z",
        price: 10,
        createdAt: "2021-08-25T16:00:10.895Z",
        updatedAt: "2021-08-25T16:00:10.895Z",
      },
      {
        uuid: "7bac7ae3-8edb-42c7-99d1-2cb5e8f69824",
        movieId: 11,
        roomId: 6,
        slot: 3,
        timeStart: "2021-09-05T04:00:00.000Z",
        timeEnd: "2021-09-05T06:00:00.000Z",
        price: 10,
        createdAt: "2021-08-25T16:01:26.643Z",
        updatedAt: "2021-08-25T16:01:26.643Z",
      },
      {
        uuid: "e9f3fb11-9a5f-4a51-942f-c55019991d8a",
        movieId: 11,
        roomId: 6,
        slot: 3,
        timeStart: "2021-09-10T04:00:00.000Z",
        timeEnd: "2021-09-10T06:00:00.000Z",
        price: 10,
        createdAt: "2021-08-25T16:02:02.378Z",
        updatedAt: "2021-08-25T16:02:02.378Z",
      },
    ];
    await queryInterface.bulkInsert("Showtimes", data, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Showtimes", null, {});
  },
};