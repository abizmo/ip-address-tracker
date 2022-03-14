const domainNameRegExpr = /^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/;

function validateDomainName(domainName) {
  return domainNameRegExpr.test(domainName);
}

export default validateDomainName;
