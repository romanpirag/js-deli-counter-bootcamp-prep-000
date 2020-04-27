const katzDeliLine = []

const takeANumber = (line, name) => {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

const nowServing = (line) => {
  if (!line.length) {
    return "There is nobody waiting to be served!"
  }
  return `Currently serving ${line.shift()}`
}

const currentLine = (line) => {
for(let i = 0; i < line.length; i++) {
  return `The line is currently: ${i+1}.${line[i]} `
}
}