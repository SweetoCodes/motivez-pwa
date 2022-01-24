export const formatDateLong = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  export const formatDateShort = (dateString) => {
    const options = { month: "short", day: "numeric" }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  export const emailValidation = ( text ) => {
    if (text == null){
      return null
    }
    if (text.length==0){
      return "Please provide an email"
    }
    if (!text.includes("@")){
      return "Your email must contain an @ character"
    }
    if (!text.includes(".")){
      return "Your email must contain a valid email ending"
    }
    if (text.includes(" ")){
      return "Your email must not contain a space"
    }
    else{
    return false
  }
  }
  
  export const passwordValidation = ( text ) => {
    if (text == null){
      return null
    }
    if (text.length==0){
      return "Please provide a password"
    }
    if (text.length<6){
      return "Passwords must have a minimum of 6 characters"
    }
    else{
    return false
  }
  }