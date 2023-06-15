function sortByFullNameAsc(data) {
    return data.sort((a, b) => {
      const lastNameA = a.surname.toUpperCase();
      const lastNameB = b.surname.toUpperCase();
  
      if (lastNameA < lastNameB) {
        return -1;
      }
      if (lastNameA > lastNameB) {
        return 1;
      }
  
      const firstNameA = a.firstname.toUpperCase();
      const firstNameB = b.firstname.toUpperCase();
  
      if (firstNameA < firstNameB) {
        return -1;
      }
      if (firstNameA > firstNameB) {
        return 1;
      }
  
      return 0;
    });
  }
  
  function sortByFullNameDesc(data) {
    return data.sort((a, b) => {
      const lastNameA = a.surname.toUpperCase();
      const lastNameB = b.surname.toUpperCase();
  
      if (lastNameA > lastNameB) {
        return -1;
      }
      if (lastNameA < lastNameB) {
        return 1;
      }
  
      const firstNameA = a.firstname.toUpperCase();
      const firstNameB = b.firstname.toUpperCase();
  
      if (firstNameA > firstNameB) {
        return -1;
      }
      if (firstNameA < firstNameB) {
        return 1;
      }
  
      return 0;
    });
  }

  export {
    sortByFullNameDesc,sortByFullNameAsc
  }