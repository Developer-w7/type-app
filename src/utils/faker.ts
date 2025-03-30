// ESM
import { faker } from '@faker-js/faker';
import ServiceDash from '../app/service_tracker/dash';



export function createRandomUser() {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.username(), // before version 9.1.0, use userName()
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };
}

// export const FakerUsersData = faker.helpers.multiple(createRandomUser, {
//     count: 5,
//   });

  export function createService() {
    return {
      serviceId: faker.string.uuid(),
      serviceName: faker.lorem.word(), // before version 9.1.0, use userName()
      location: faker.internet.email(),
      serviceType: faker.lorem.word(),
      serviceStatus: faker.image.avatar(),
      serviceDescription: faker.lorem.paragraph(),
      serviceStartDate: faker.date.past(),
      serviceEndDate: faker.date.future(),
    };
  }

//   export const FakerServiceData = faker.helpers.multiple(createService, {
//     count: 1,
//   });
  