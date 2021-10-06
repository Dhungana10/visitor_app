const Visitor = require('./models/visitor');

const visitors=[
    {
        name: 'Kshitiz',
        number: 9863180291,
        img:'https://qph.fs.quoracdn.net/main-qimg-cf89e8e6daa9dabc8174c303e4d53d3a',
        desc: 'I am a Student',
        email:'kshitiz@gmail.com'
    },
    {
        name: 'Aadil',
        number: 9863180292,
        img:'https://qph.fs.quoracdn.net/main-qimg-cf89e8e6daa9dabc8174c303e4d53d3a',
        desc: 'I am a Teacher',
        email:'aadil@gmail.com'
    },
    {
        name: 'Anjan',
        number: 9863180293,
        img:'https://qph.fs.quoracdn.net/main-qimg-cf89e8e6daa9dabc8174c303e4d53d3a',
        desc: 'I am a Cook',
        email:'anjan@gmail.com'
    },
    {
        name: 'Kishan',
        number: 9863180294,
        img:'https://qph.fs.quoracdn.net/main-qimg-cf89e8e6daa9dabc8174c303e4d53d3a',
        desc: 'I am a Businessman',
        email:'kishan@gmail.com'
    }


]

const seedDB =  async () =>{
   await Visitor.deleteMany({});
   await Visitor.insertMany(visitors);
   console.log('DB SEEDED');
}

module.exports = seedDB;