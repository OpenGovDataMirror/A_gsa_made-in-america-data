exports.WAIVER_FILE = './waivers-data.json'
exports.URGENT_FILE = './urgent-waivers-data.json'
exports.GH_API_KEY = process.env.GH_API_KEY
exports.FORMS_API_KEY = process.env.FORMS_API_KEY
exports.URGENT_API_KEY = process.env.URGENT_API_KEY
exports.BRANCH = process.env.CIRCLE_BRANCH

exports.GITHUB_URL = `https://api.github.com/repos/GSA/made-in-america-data/contents/waivers-data.json?ref=${process.env.CIRCLE_BRANCH}`
exports.URGENT_GH_URL = `https://api.github.com/repos/GSA/made-in-america-data/contents/urgent-waivers-data.json?ref=${process.env.CIRCLE_BRANCH}`

// PRODUCTION URLS
if (process.env.CIRCLE_BRANCH === 'main') {
  exports.URGENT_DATA_URL =
    'https://submission.forms.gov/mia-live/urgentrequirementsreport/submission?&select=_id,form,data.waiverType,data.contractingOfficeAgencyId,data.contractingOfficeAgencyName,data.naics,data.psc,data.procurementTitle,data.summaryOfProcurement,data.dateContractSigned,data.identifyUrgencyContributedToNonavailability,data.urgencyContributedExplanation,data.waiverRationaleSummary,data.anticipatedMissionImpactNoWaiver,state,created,modified,data.contractNumber,data.requestStatus,data.ombDetermination,data.conditionsApplicableToConsistencyDetermination'
  exports.DATA_URL =
    'https://submission.forms.gov/mia-live/madeinamericanonavailabilitywaiverrequest/submission?&select=state,data.piids,data.requestStatus,data.psc,data.procurementTitle,data.contractingOfficeAgencyName,data.waiverCoverage,data.contractingOfficeAgencyId,data.fundingAgencyId,data.fundingAgencyName,data.procurementStage,data.naics,data.summaryOfProcurement,data.waiverRationaleSummary,data.sourcesSoughtOrRfiIssued,data.expectedMaximumDurationOfTheRequestedWaiver,data.isPricePreferenceIncluded,created,modified,data.ombDetermination,data.conditionsApplicableToConsistencyDetermination,data.solicitationId,data.countriesOfOriginAndUSContent'
} else if (process.env.CIRCLE_BRANCH === 'stage') {
  // STAGE URLS
  exports.URGENT_DATA_URL =
    'https://test.service.forms.gov/mia-test/urgentrequirementsreport/submission?&select=_id,form,data.waiverType,data.contractingOfficeAgencyId,data.contractingOfficeAgencyName,data.naics,data.psc,data.procurementTitle,data.summaryOfProcurement,data.dateContractSigned,data.identifyUrgencyContributedToNonavailability,data.urgencyContributedExplanation,data.waiverRationaleSummary,data.anticipatedMissionImpactNoWaiver,state,created,modified,data.contractNumber,data.requestStatus,data.ombDetermination,data.conditionsApplicableToConsistencyDetermination'
  exports.DATA_URL =
    'https://test.service.forms.gov/mia-test/madeinamericanonavailabilitywaiverrequest/submission?&select=state,data.piids,data.requestStatus,data.psc,data.procurementTitle,data.contractingOfficeAgencyName,data.waiverCoverage,data.contractingOfficeAgencyId,data.fundingAgencyId,data.fundingAgencyName,data.procurementStage,data.naics,data.summaryOfProcurement,data.waiverRationaleSummary,data.sourcesSoughtOrRfiIssued,data.expectedMaximumDurationOfTheRequestedWaiver,data.isPricePreferenceIncluded,created,modified,data.ombDetermination,data.conditionsApplicableToConsistencyDetermination,data.solicitationId,data.countriesOfOriginAndUSContent'
} else {
  // FORMS DEV URLS
  exports.URGENT_DATA_URL =
    'https://test.service.forms.gov/mia-dev/urgentrequirementsreport/submission?&select=_id,form,data.waiverType,data.contractingOfficeAgencyId,data.contractingOfficeAgencyName,data.naics,data.psc,data.procurementTitle,data.summaryOfProcurement,data.dateContractSigned,data.identifyUrgencyContributedToNonavailability,data.urgencyContributedExplanation,data.waiverRationaleSummary,data.anticipatedMissionImpactNoWaiver,state,created,modified,data.contractNumber,data.requestStatus,data.ombDetermination,data.conditionsApplicableToConsistencyDetermination'
  exports.DATA_URL =
    'https://test.service.forms.gov/mia-dev/madeinamericanonavailabilitywaiverrequest/submission?&select=state,data.piids,data.requestStatus,data.psc,data.procurementTitle,data.contractingOfficeAgencyName,data.waiverCoverage,data.contractingOfficeAgencyId,data.fundingAgencyId,data.fundingAgencyName,data.procurementStage,data.naics,data.summaryOfProcurement,data.waiverRationaleSummary,data.sourcesSoughtOrRfiIssued,data.expectedMaximumDurationOfTheRequestedWaiver,data.isPricePreferenceIncluded,created,modified,data.ombDetermination,data.conditionsApplicableToConsistencyDetermination,data.solicitationId,data.countriesOfOriginAndUSContent'
}
