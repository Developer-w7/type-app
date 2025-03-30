
interface sanitizeTypes {
  fName:string,
  mNames:string|null,
  lName:string
}
class UserService {

    /**
     * 
     * register a new user
     * @param firstName
     * @param middleNames
     * @param lastName
     */

async register(firstName:string, middleNames:string, lastName:string): Promise<number> {
      // check if user already exists (out of scope for this tutorial)
      // ...
      // check if firstName, lastName and middleNames are not empty
      const { fName, mNames, lName } = this.sanitizeNames(
        firstName,
        middleNames,
        lastName
      );
      console.log(`firstName = ${fName}`);
      console.log(`middleNames = ${mNames}`);
      console.log(`lastName = ${lName}`);
  
      // save to db (out of scope for this tutorial)
      // ...
      // pretend that inserted user has id 5
      return 5;
    }
  
    /**
     * properly separates first, last and middle names based on space
     * E.g.
     * firstName: John Alexander Thomas
     * middleNameStr: null
     * lastName: Smith
     *
     * will be transformed to
     *
     * firstName: John
     * middleNameStr: Alexander Thomas
     * Last name: Smith
     */
    sanitizeNames(firstName:string, middleNameStr:string, lastName:string): sanitizeTypes {
      // eslint-disable-next-line prefer-const
      let [sanitizedFirstName, ...mNames] = firstName.trim().split(' ');
      if (middleNameStr) {
        mNames = mNames.concat(middleNameStr.split(' '));
      }
  
      // remove nulls from list
      const sanitizedMiddleNames = mNames.filter((n) => n);
      // in case we do not have any middlenames
      // we want to return null and not empty string
      // for the middle name
      const sanitizedMiddleName = sanitizedMiddleNames.length
        ? sanitizedMiddleNames.join(' ')
        : null;
      const sanitizedLastName = lastName.trim();
  
      return {
        fName: sanitizedFirstName,
        mNames: sanitizedMiddleName,
        lName: sanitizedLastName,
      };
    }
  }
  
  module.exports = new UserService();