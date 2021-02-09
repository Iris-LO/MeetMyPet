# MCD

USER: _first_name, city, address, mail, password <br>
HAVE A, 01 USER, 11 ANIMAL <br>
CREATE, 0N GROUP, 11 ANIMAL <br>

AUTHORIZE, 01 USER, 11 AUTHORIZATION <br>
ANIMAL: _name, specie, age, sex, description, breed, size, image, chat_id <br>
LIST, 0N ANIMAL, 1N GROUP <br>
GROUP: _name, latitude, longitude, city, address, country, description, created_by, chatroom_id <br>

AUTHORIZATION: _cgu, cookies, localisation <br>
SEND, 0N MESSAGE, 11 ANIMAL <br>
MESSAGE:_content, send_at <br>
FEED, 11 GROUP, 0N MESSAGE <br>
