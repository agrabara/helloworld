const express = require('express');
const app = express();

let dd,mm,yyyy,HH,hh,MM,SS;
  
// Function to convert
// single digit input
// to two digits
const formatData = (input) => {
  if (input > 9) {
    return input;
  } else return `0${input}`;
};
  
// Function to convert
// 24 Hour to 12 Hour clock
const formatHour = (input) => {
  if (input > 12) {
    return input - 12;
  }
  return input;
};



app.get('/', (req, res) => {
  let date = new Date();
  dd = formatData(date.getDate());
  mm = formatData(date.getMonth() + 1);
  yyyy = date.getFullYear();
  HH= formatData(date.getHours());
  hh= formatData(formatHour(date.getHours()));
  MM= formatData(date.getMinutes());
  SS= formatData(date.getSeconds());

  res.send('Moja pierwsza apka chmurowa - dla Sławka! '+ `${mm}/${dd}/${yyyy} ${HH}:${MM}:${SS}`);
  console.log('Odpalone '+ `${mm}/${dd}/${yyyy} ${HH}:${MM}:${SS}`);
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
