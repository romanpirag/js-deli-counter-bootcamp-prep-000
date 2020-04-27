const katzDeliLine = ["Jim","Bob","Sally"]

const takeANumber = (line, name) => {
  katzDeliLine.push(name)
  console.log(`"Welcome, ${name}. You are number ${line.length} in line."`)
}

const nowServing = (line) => {
  if (!line) {
    return "There is nobody waiting to be served!"
  }
  return ` Now serving: ${katzDeliLine.shift()}`
}

const currentLine = (line) => {
for(let i = 0; i < line.length; i++) {
  console.log(`The line is currently: ${i+1}.${line[i]} `)
}
}