

const takeANumber = (line, name) => {
  katzDeliLine.push(name)
  return `"Welcome, ${name}. You are number ${line.length} in line."`
}

const nowServing = (line) => {
  if (!line) {
    return "There is nobody waiting to be served!"
  }
  return ${katzDeliLine.shift()} 
}

const currentLine = (line) => {
for(let i = 0; i < line.length; i++) {
  return `The line is currently: ${i+1}.${line[i]} `
}
}