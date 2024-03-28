* {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

body {
  min-height: 1000px;
  display: flex;
  flex-direction: column;
  background-color: rgb(231, 133, 255);
  color: black;
}

.headerBar {
  background-color: rgb(48, 6, 45);
  color: bisque;
  text-align: center;
  padding: 20px;
}

.title {
  margin-bottom: 20px;
  color: white;
}

.topbar {
  margin-bottom: 10px;
}

.currency {
  font-size: 30px;
  font-weight: 300;
}

.balance {
  font-size: 30px;
  font-weight: 300;
}

.content {
  width: 580px;
  margin: 0 auto;
  padding: 3%;
  padding-left: 6%;
}

.secondTitle {
  background-color: rgb(48, 6, 45);
  color: white;
  text-align: center;
  margin-top: 100px;
  padding: 20px;
  font-size: 25px;
}

.form {
  padding: 5px;
  padding-top: 20px;
  padding-left: 10%;
  justify-content: center;
  background-color: bisque;
}

.formLine {
  display: inline-flex;
  padding: 5px 0px;
}

.left {
  float: left;
}

.right {
  float: right;
  margin-right: 100px;
}

input,
select {
  width: 130px;
  margin-left: 10px;
}

/* table style */
table {
  width: 100%;
}

thead {
  background-color: rgb(48, 6, 45);
  color: white;
  line-height: 30px;
}

tbody {
  background-color: bisque;
  line-height: 30px;
  text-align: center;
}

button {
  width: 200px;
  color: #fff;
  padding: 10px;
  text-align: center;
  font-size: 1.1em;
  line-height: 20px;
  background-color: rgb(48, 6, 45);
  border-radius: 5px;
  margin: 14px 25%;
  cursor: pointer;
}

button:hover {
  box-shadow: 0 0 0 2px grey;
  transition: 0.5s;
}

a {
  text-decoration: underline;
  cursor: pointer;
}
