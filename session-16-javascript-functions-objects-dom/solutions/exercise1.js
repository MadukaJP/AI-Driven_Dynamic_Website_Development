class Reservation {
  constructor(name, partySize, date) {
    this.name = name;
    this.partySize = partySize;
    this.date = date;
  }

  summary() {
    return `${this.name} — party of ${this.partySize} on ${this.date}`;
  }
}

const res = new Reservation("Alex", 4, "2026-08-01");
console.log(res.summary());
