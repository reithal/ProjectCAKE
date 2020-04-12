# Local One Off Api Documentation

## Save Employer Information
Endpoint: `/api/createEmployer`
Required information, please follow shown syntax:
- `first_name` type string
- `last_name` type string
- `email` type string
- `phone` type string

## Get all employers
Endpoint: `/api/getEmployers`

## Get employer by id
Endpoint: `/api/getEmployer/id`


## Save Applicant Information
Endpoint: `/api/createApplicant`
Required information, please follow shown syntax:
- `first_name` type string
- `last_name` type string
- `email` type string
- `phone` type string
- `squalifiers` type string

## Get all applicants
Endpoint: `/api/getApplicants`

## Get applicant by id
Endpoint: `/api/getApplicant/id`


## Save Gig Information
Endpoint: `/api/createGig`
Required information, please follow shown syntax:
- `title` type string
- `description` type string
- `category` type string
- `volunteer` type boolean
- `pay` type decimal
- `recurring_gig` type boolean
- `street_address` type string
- `state` type string
- `zipcode` type integer
- `completion_date` type date
- `laboring_hours` type integer
- `assigned_to_id` type integer

## Get all gigs
Endpoint: `/api/getGigs`

## Get gig by id
Endpoint: `/api/getGig/id`

## Update gig with the id of assigned applicant
Endpoint: `/api/updateGig/id` <!-- id of the gig you are trying to update -->
Required information, please follow shown syntax:
- `assigned_to_id` type integer