function dryNumber(dry, numbers) {
    let errors = [];
    for(let i = 1;i <= numbers; i++) {
      if(i.toString().includes(dry.toString())) {
        errors.push(i)
      }
    }
    return errors
  }