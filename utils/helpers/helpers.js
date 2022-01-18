export const formatDateLong = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  export const formatDateShort = (dateString) => {
    const options = { month: "short", day: "numeric" }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

