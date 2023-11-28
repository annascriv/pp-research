import re
from django.core.exceptions import ValidationError

def validate_name(name):
    error_message = 'Name can only contain letters.'

    regex =  r'^[a-zA-Z]+$'

    good_name = re.match(name, regex)

    if good_name:
        return name
    else:
        raise ValidationError(error_message, params={'name': name})
    

def validate_email(email_address):
    error_message = 'Email address should be in the form "%@gmail.com"'

    regex = r'^[a-zA-Z0-9._%+-]+@gmail\.com$'

    good_email = re.match(email_address, regex)

    if good_email:
        return email_address
    else:
        raise ValidationError(error_message, params={'email_address': email_address})
    

def validate_age(age):
    error_message = 'You must be at least 18 years old to own a pet.'

    if age > 17:
        return age
    else:
        raise ValidationError(error_message, params={'age': age})

