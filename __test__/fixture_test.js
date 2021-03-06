const fs = require('fs');
const graphqlLang = require('graphql/language');
const subject = require('../compiler/transformer');
const reasonTransformer = require('../compiler/reason/transformer');
const reasonPrinter = require('../compiler/reason/printer');

describe('transformer', () => {
  fs
    .readdirSync(__dirname + '/fixtures')
    .filter(value => {
      return /\.graphql$/.test(value);
    })
    .map(fileName => {
      return fileName.split('.')[0];
    })
    .forEach(fixture => {
      describe(fixture, () => {
        it('should match re fixture', () => {
          const raw = fs.readFileSync(
            __dirname + `/fixtures/${fixture}.graphql`,
            'utf8',
          );
          const source = new graphqlLang.Source(raw);
          const transformed = subject(source);
          const reason = reasonTransformer(transformed);
          const printed = reasonPrinter(reason);
          const expected = fs.readFileSync(
            __dirname + `/fixtures/${fixture}.re`,
            'utf8',
          );
          expect(printed.trim()).toEqual(expected.trim());
        });
      });
    });
});
