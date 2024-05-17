const mongoose = require('mongoose');
const bookModel = require('../src/models/favorite.models');

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const should = chai.should();

chai.use(chaiHttp);
describe('FavoriteBooks', () => {
    beforeEach((done) => {
        bookModel.remove({}, (err) => {
            done();
        });
    });
    describe('/Get book', () => {
        it('It should get all favorite books', (done) => {
            chai.request(server)
                .get('/favoriteBooks')
                .set('authorization', 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjYyMzRhZDAzMTczMzg2MmI4ODRhNTUiLCJlbWFpbCI6ImFuaW1AZ21haWwuY29tIiwiaWF0IjoxNjUwNjAzODQxfQ.w3YOJPCix2Aff_F8n8a-zWPKm9lYbKiuzSkL29p-z0A')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.favoriteBooks.should.be.a('array');
                    res.body.should.have.property('success').eql(true);
                    // res.body.favoriteBooks.length.should.be.eql(0);
                    done();
                })
        })
    })

    describe('/post book', () => {
        it('It should POST a book in Favorite', (done) => {
            let FavoriteBookObj = {
                title: "Fantastic Mr. Fox",
                key: "/works/OL7353617M",
                author: "test_author",
                image_name: "image1.jpg"                
            }

            chai.request(server)
                .post('/favoriteBooks')
                .set('authorization', 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjYyMzRhZDAzMTczMzg2MmI4ODRhNTUiLCJlbWFpbCI6ImFuaW1AZ21haWwuY29tIiwiaWF0IjoxNjUwNjAzODQxfQ.w3YOJPCix2Aff_F8n8a-zWPKm9lYbKiuzSkL29p-z0A')
                .send(FavoriteBookObj)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('success').eql(true);
                    res.body.should.have.property('msg').eql('Book added to favorite');
                    res.body.book.should.have.property('key');
                    done();
                })
        })
    })

    describe('/Delete book', () => {
        it('It should delete book from favorite', (done) => {
            chai.request(server)
                .delete('/favoriteBooks/OL7353617M')
                .set('authorization', 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjYyMzRhZDAzMTczMzg2MmI4ODRhNTUiLCJlbWFpbCI6ImFuaW1AZ21haWwuY29tIiwiaWF0IjoxNjUwNjAzODQxfQ.w3YOJPCix2Aff_F8n8a-zWPKm9lYbKiuzSkL29p-z0A')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('success').eql(true);
                    res.body.should.have.property('msg').eql('Book deleted from favorite');
                    done();
                })
        })
    })
})