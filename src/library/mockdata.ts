const users = [{"first_name":"Allin","last_name":"Gregr","email":"agregr0@gnu.org","is_active":false,"phone_number":"306-675-5361","password":"jZ1,#&Oq@sCI{"},
{"first_name":"Blakeley","last_name":"Swait","email":"bswait1@sfgate.com","is_active":true,"phone_number":"649-362-4494","password":"oX8}gGra|sc~"},
{"first_name":"Cass","last_name":"Sabathier","email":"csabathier2@ycombinator.com","is_active":true,"phone_number":"685-831-9314","password":"uW3\"F}jJ`b"},
{"first_name":"Dare","last_name":"Jerromes","email":"djerromes3@scientificamerican.com","is_active":true,"phone_number":"570-867-7763","password":"xR5/n\\)o"},
{"first_name":"Eula","last_name":"Grasner","email":"egrasner4@nih.gov","is_active":true,"phone_number":"124-875-2632","password":"cX7{?ri)W`xRe"},
{"first_name":"Arnie","last_name":"Glaysher","email":"aglaysher5@symantec.com","is_active":true,"phone_number":"582-532-0947","password":"sW9<+_GTq.~s~"},
{"first_name":"Berthe","last_name":"Dyer","email":"bdyer6@opensource.org","is_active":true,"phone_number":"262-892-2176","password":"pK9_CDEyG'"},
{"first_name":"Kandy","last_name":"Penniall","email":"kpenniall7@naver.com","is_active":true,"phone_number":"363-828-2249","password":"eK8`l{\\<x"},
{"first_name":"Gray","last_name":"Longforth","email":"glongforth8@photobucket.com","is_active":true,"phone_number":"440-521-4578","password":"xT8)mSjH"},
{"first_name":"Leonie","last_name":"Tine","email":"ltine9@discuz.net","is_active":false,"phone_number":"284-923-6470","password":"rQ3*I<>>%)aMGS"},]

const groups = [
    {
        createdby:'bswait1@sfgate.com',
        lastmodifiedby: 'bswait1@sfgate.com',
        name: 'level2',
        ticketaccess: ['full'],
        isAdmin: false,
        is_active: true
    },
    {
        createdby:'bswait1@sfgate.com',
        lastmodifiedby: 'bswait1@sfgate.com',
        name: 'level1',
        ticketaccess: ['full'],
        isAdmin: false,
        is_active: true
    },
]

const groupleads = [
    { createdby: 'bswait1@sfgate.com', group: 'level2', user: 'aglaysher5@symantec.com'},
    { createdby: 'bswait1@sfgate.com', group: 'level1', user: 'egrasner4@nih.gov'},
]

const groupmembers = [
    { createdby: 'bswait1@sfgate.com', group: 'level1', user: 'agregr0@gnu.org' },
    { createdby: 'bswait1@sfgate.com', group: 'level1', user: 'bdyer6@opensource.org' },
    { createdby: 'bswait1@sfgate.com', group: 'level1', user: 'kpenniall7@naver.com' },
    { createdby: 'bswait1@sfgate.com', group: 'level1', user: 'glongforth8@photobucket.com' },
    { createdby: 'bswait1@sfgate.com', group: 'level1', user: 'ltine9@discuz.net' },
    { createdby: 'bswait1@sfgate.com', group: 'level2', user: 'aglaysher5@symantec.com' },
    { createdby: 'bswait1@sfgate.com', group: 'level2', user: 'csabathier2@ycombinator.com' },
    { createdby: 'bswait1@sfgate.com', group: 'level2', user: 'djerromes3@scientificamerican.com' },
]