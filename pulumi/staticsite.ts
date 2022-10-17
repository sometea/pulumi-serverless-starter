import * as website from '@pulumi/aws-static-website'

export function createStaticSite() {
  var site = new website.Website('frontend', {
    sitePath: './frontend',
    withCDN: true,
  });
  return site.websiteURL;
}