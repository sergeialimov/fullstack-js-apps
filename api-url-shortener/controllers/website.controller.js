const dns = require('dns');
const util = require('util');

const Website = require('../models/website.model');
const counterController = require('../controllers/counter.controller');

const dnsLookupAsync = util.promisify(dns.lookup);

async function checkUrl (url) {
  return dnsLookupAsync(url)
    .then((obj) => obj.address)
    .catch((err) => console.log(err));
}

exports.website_new = async (req, res) => {
  const address = await checkUrl(req.body.url.split('/')
    .pop());
  if (address) {
    try {
      const counter = await counterController.getNextSequence('userid');
      const website = (await Website.find({ url: req.body.url }))[0];
      if (!website) {
        const newWebsite = new Website({ _id: counter, url: req.body.url });
        const result = await newWebsite.save();
        res.status(200)
          .send({
            original_url: result.url,
            short_url: counter,
          });
      } else {
        res.status(200)
          .send(`Specified url already existing\nThe shorturl is: ${website._id}`);
      }
    } catch (error) {
      res.status(500)
        .send(error);
    }
  } else {
    res.status(200)
      .json({ error: `The URL ${req.body.url} is invalid` });
  }
};

exports.website_default = (req, res) => {
  res.sendFile(`${process.cwd()}/views/index.html`);
};

exports.website_open_short = async (req, res) => {
  const parsedNum = parseInt(req.params.num, 10);
  const website = await Website.findById(parsedNum, (err, data) => data)
    .catch((err) => {
      res.status(500)
        .send(err);
    });
  if (website) {
    res.status(200)
      .redirect(website.url);
  } else {
    res.status(200)
      .send(`There is no website with shorturl: ${parsedNum}`);
  }
};
