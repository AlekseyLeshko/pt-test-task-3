(function() {
  'use strict';

  angular
    .module('app')
    .constant('bookStorage', bookStorage());

  bookStorage.$inject = [];

  function bookStorage() {
    var list = [{
  "id": "9ba21860-96e8-4096-940b-0617eb6238c7",
  "author": "Peter Gutierrez",
  "rating": 9,
  "description": "Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.",
  "name": "fringilla rhoncus mauris enim leo rhoncus sed",
  "avatar": "https://robohash.org/quiabaut.jpg?size=50x50&set=set1"
}, {
  "id": "41be12f8-6644-42f4-b1a6-5bb1e9672326",
  "author": "James Hawkins",
  "rating": 2,
  "description": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque.",
  "name": "luctus tincidunt nulla mollis molestie lorem quisque",
  "avatar": "https://robohash.org/voluptatemenimomnis.png?size=50x50&set=set1"
}, {
  "id": "83adfe94-53c1-4809-8f7c-bedb8eba56c4",
  "author": "Lisa Ray",
  "rating": 10,
  "description": "Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.",
  "name": "nulla",
  "avatar": "https://robohash.org/consequunturquoest.jpg?size=50x50&set=set1"
}, {
  "id": "6aed2ade-d438-42e5-baeb-a247f7b335a1",
  "author": "Carolyn Walker",
  "rating": 7,
  "description": "Aenean sit amet justo.",
  "name": "mi pede malesuada in imperdiet et commodo",
  "avatar": "https://robohash.org/dolorummagnamdolores.bmp?size=50x50&set=set1"
}, {
  "id": "ee949d14-3ede-481c-a4bd-4e494abd1db7",
  "author": "Jonathan Weaver",
  "rating": 4,
  "description": "Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.",
  "name": "velit nec nisi",
  "avatar": "https://robohash.org/tenetursuntvoluptas.png?size=50x50&set=set1"
}, {
  "id": "1e78b46f-c571-4703-a55b-417249d9a553",
  "author": "Peter Fowler",
  "rating": 3,
  "description": "Aliquam erat volutpat. In congue.",
  "name": "ligula sit amet",
  "avatar": "https://robohash.org/quisreiciendissequi.bmp?size=50x50&set=set1"
}, {
  "id": "adb81cae-6731-472c-947b-f34e1b5ce5db",
  "author": "Brenda Coleman",
  "rating": 1,
  "description": "Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.",
  "name": "turpis eget elit",
  "avatar": "https://robohash.org/eiusnonsed.png?size=50x50&set=set1"
}, {
  "id": "24dac670-81e9-4353-aaaf-e5a6bf903193",
  "author": "Tina Garza",
  "rating": 7,
  "description": "Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.",
  "name": "aliquam non mauris morbi",
  "avatar": "https://robohash.org/distinctiopossimuscorporis.jpg?size=50x50&set=set1"
}, {
  "id": "ac971b11-da59-4d6c-bb39-a7ef0418e843",
  "author": "Christine Johnston",
  "rating": 5,
  "description": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.",
  "name": "quis lectus suspendisse",
  "avatar": "https://robohash.org/quasiautporro.bmp?size=50x50&set=set1"
}, {
  "id": "dfffb02b-4838-4ce4-9a51-ee9f90450560",
  "author": "Carl Ferguson",
  "rating": 5,
  "description": "Morbi quis tortor id nulla ultrices aliquet.",
  "name": "sit",
  "avatar": "https://robohash.org/etautemquibusdam.jpg?size=50x50&set=set1"
}, {
  "id": "802f94f5-68d6-424b-864b-63772f435049",
  "author": "Frank Miller",
  "rating": 6,
  "description": "Nulla nisl. Nunc nisl.",
  "name": "vivamus vel",
  "avatar": "https://robohash.org/reprehenderitsuscipitaut.bmp?size=50x50&set=set1"
}, {
  "id": "3a0730a0-ab58-4e04-91d0-c9248f988777",
  "author": "Frank Mitchell",
  "rating": 9,
  "description": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.",
  "name": "odio in hac habitasse platea dictumst maecenas",
  "avatar": "https://robohash.org/remvoluptatumet.bmp?size=50x50&set=set1"
}, {
  "id": "c00b4517-2f37-41f8-822f-0233cfa5e430",
  "author": "Laura Fields",
  "rating": 2,
  "description": "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
  "name": "leo maecenas pulvinar lobortis est",
  "avatar": "https://robohash.org/maximesolutaet.jpg?size=50x50&set=set1"
}, {
  "id": "38cc4b78-6194-46e4-8e84-d2f798f633fa",
  "author": "David Cox",
  "rating": 7,
  "description": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.",
  "name": "amet turpis elementum ligula vehicula",
  "avatar": "https://robohash.org/consequaturutpariatur.bmp?size=50x50&set=set1"
}, {
  "id": "33b4a2b4-312b-432a-9eee-8767f47a71ab",
  "author": "Deborah Sanders",
  "rating": 6,
  "description": "Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.",
  "name": "nec dui luctus",
  "avatar": "https://robohash.org/etperferendismaiores.bmp?size=50x50&set=set1"
}, {
  "id": "318ec19e-e6c4-4167-b524-828f3e6db6d1",
  "author": "Deborah Mcdonald",
  "rating": 6,
  "description": "Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.",
  "name": "neque vestibulum eget vulputate",
  "avatar": "https://robohash.org/repellateummolestiae.png?size=50x50&set=set1"
}, {
  "id": "656b60d5-4132-4486-9a4c-e8cc18a372bd",
  "author": "David Fisher",
  "rating": 9,
  "description": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
  "name": "morbi sem mauris",
  "avatar": "https://robohash.org/voluptatemexdelectus.png?size=50x50&set=set1"
}, {
  "id": "fd7d9d45-6f6f-44cc-8988-46f2b387d453",
  "author": "Heather Kim",
  "rating": 7,
  "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.",
  "name": "nulla dapibus dolor vel est",
  "avatar": "https://robohash.org/similiquedolorumipsa.jpg?size=50x50&set=set1"
}, {
  "id": "8e05bb30-7f34-4d49-a2d6-8b16e4f53da8",
  "author": "Kimberly Gomez",
  "rating": 6,
  "description": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.",
  "name": "urna ut tellus nulla ut erat id",
  "avatar": "https://robohash.org/necessitatibusperferendisfugit.jpg?size=50x50&set=set1"
}, {
  "id": "6646abe5-77ea-4f0e-ad3c-deddda7e53e1",
  "author": "Jeremy Bryant",
  "rating": 3,
  "description": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
  "name": "montes nascetur ridiculus",
  "avatar": "https://robohash.org/impeditdoloremet.bmp?size=50x50&set=set1"
}, {
  "id": "7d724aff-666f-4b7b-8a98-6781797d5a46",
  "author": "Phillip Nguyen",
  "rating": 7,
  "description": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.",
  "name": "ut nunc vestibulum ante ipsum primis in",
  "avatar": "https://robohash.org/temporaadipisciut.png?size=50x50&set=set1"
}, {
  "id": "c78fd193-8448-4b61-a229-9f5acda8872e",
  "author": "Doris Lawson",
  "rating": 10,
  "description": "Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.",
  "name": "pede morbi porttitor lorem",
  "avatar": "https://robohash.org/estaccusantiumaperiam.bmp?size=50x50&set=set1"
}, {
  "id": "2826fbde-3ebd-4a93-942d-ccac067c7a41",
  "author": "Debra Hayes",
  "rating": 2,
  "description": "In quis justo. Maecenas rhoncus aliquam lacus.",
  "name": "nunc proin",
  "avatar": "https://robohash.org/animiquivoluptas.bmp?size=50x50&set=set1"
}, {
  "id": "7022d38d-8d1a-41f5-a85a-da4259a66ed2",
  "author": "John Henry",
  "rating": 1,
  "description": "Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.",
  "name": "a odio",
  "avatar": "https://robohash.org/reprehenderitrecusandaedolorem.jpg?size=50x50&set=set1"
}, {
  "id": "6fb088d7-2620-46ba-878b-8e0ba867767d",
  "author": "Mark Romero",
  "rating": 7,
  "description": "Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.",
  "name": "etiam pretium iaculis justo",
  "avatar": "https://robohash.org/eosinrerum.png?size=50x50&set=set1"
}, {
  "id": "4fb7b984-1445-4468-8167-93c8d9d37250",
  "author": "Phillip Knight",
  "rating": 10,
  "description": "Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
  "name": "elementum",
  "avatar": "https://robohash.org/oditquiaratione.jpg?size=50x50&set=set1"
}, {
  "id": "d043f232-aa72-4354-96d9-0c0f2d781661",
  "author": "Mildred Gilbert",
  "rating": 3,
  "description": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.",
  "name": "ut",
  "avatar": "https://robohash.org/etsuntasperiores.png?size=50x50&set=set1"
}, {
  "id": "474a72b2-5a48-4851-9767-a0d6d4224124",
  "author": "Kathryn Watson",
  "rating": 7,
  "description": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
  "name": "augue vestibulum rutrum rutrum neque",
  "avatar": "https://robohash.org/etpariaturdignissimos.png?size=50x50&set=set1"
}, {
  "id": "bde64a57-13ea-4507-b146-b3c4f7707a12",
  "author": "Ashley Ryan",
  "rating": 4,
  "description": "Ut at dolor quis odio consequat varius. Integer ac leo.",
  "name": "at",
  "avatar": "https://robohash.org/atquequodaspernatur.png?size=50x50&set=set1"
}, {
  "id": "50eb4a44-0640-4ed7-8be9-7aae847dce8c",
  "author": "Aaron Lawson",
  "rating": 6,
  "description": "Nulla mollis molestie lorem. Quisque ut erat.",
  "name": "libero convallis",
  "avatar": "https://robohash.org/temporibusrepudiandaeest.png?size=50x50&set=set1"
}, {
  "id": "87c0634a-dfdb-4b30-a628-19bf492124dc",
  "author": "Cynthia Hart",
  "rating": 9,
  "description": "Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.",
  "name": "habitasse platea dictumst maecenas ut massa quis",
  "avatar": "https://robohash.org/quoetnemo.bmp?size=50x50&set=set1"
}, {
  "id": "2ef4c2ab-2764-4195-8b5f-90c500856c9c",
  "author": "Laura Mason",
  "rating": 6,
  "description": "Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst.",
  "name": "in porttitor",
  "avatar": "https://robohash.org/estfacilissimilique.jpg?size=50x50&set=set1"
}, {
  "id": "2f769671-88f7-440a-a35d-751489b9dfa9",
  "author": "Ruth Lane",
  "rating": 8,
  "description": "Nullam molestie nibh in lectus. Pellentesque at nulla.",
  "name": "nam dui proin leo odio porttitor id",
  "avatar": "https://robohash.org/quiaetnon.bmp?size=50x50&set=set1"
}, {
  "id": "c01a5d28-88cf-4036-9748-79c815542ce2",
  "author": "Joe Coleman",
  "rating": 10,
  "description": "Nulla justo.",
  "name": "sapien placerat ante nulla justo aliquam quis",
  "avatar": "https://robohash.org/repudiandaenihilomnis.png?size=50x50&set=set1"
}, {
  "id": "6d8c5e7b-21d2-48b2-ac7e-bed86f54cbe9",
  "author": "Clarence Campbell",
  "rating": 3,
  "description": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
  "name": "vitae",
  "avatar": "https://robohash.org/consequaturnonquia.jpg?size=50x50&set=set1"
}, {
  "id": "88cdd53d-4f42-45fb-b784-bf0bd2cb547d",
  "author": "Frances Hill",
  "rating": 8,
  "description": "Fusce consequat.",
  "name": "sollicitudin vitae",
  "avatar": "https://robohash.org/praesentiumdoloremeius.png?size=50x50&set=set1"
}, {
  "id": "8b7cc467-343e-4d89-a1ab-d0f175bec44a",
  "author": "Sandra Perez",
  "rating": 10,
  "description": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
  "name": "suspendisse potenti nullam porttitor lacus at turpis",
  "avatar": "https://robohash.org/quoquamest.png?size=50x50&set=set1"
}, {
  "id": "518f572b-3045-4a76-9ca1-a9fbdc00a517",
  "author": "Carolyn Harper",
  "rating": 7,
  "description": "Nulla ut erat id mauris vulputate elementum. Nullam varius.",
  "name": "urna pretium",
  "avatar": "https://robohash.org/repudiandaeetet.jpg?size=50x50&set=set1"
}, {
  "id": "6a1c3608-69c5-4974-a488-0b6f2b7ee41f",
  "author": "Keith Harrison",
  "rating": 9,
  "description": "Phasellus id sapien in sapien iaculis congue.",
  "name": "tincidunt eu",
  "avatar": "https://robohash.org/utaperiamculpa.bmp?size=50x50&set=set1"
}, {
  "id": "c9eb273f-6370-43f9-b4dd-6b8a5617a4e2",
  "author": "Roger Thomas",
  "rating": 7,
  "description": "Donec semper sapien a libero.",
  "name": "pede justo eu massa donec dapibus duis",
  "avatar": "https://robohash.org/pariaturomnisdoloremque.bmp?size=50x50&set=set1"
}, {
  "id": "511c139a-2b57-46fb-b1d0-68739552b9f4",
  "author": "Lori Ross",
  "rating": 10,
  "description": "Donec posuere metus vitae ipsum. Aliquam non mauris.",
  "name": "sed tincidunt eu felis fusce posuere",
  "avatar": "https://robohash.org/inomnisdolores.bmp?size=50x50&set=set1"
}, {
  "id": "0b85ec8a-fd25-4d26-b9d3-f1cd005ac00b",
  "author": "Brandon Brooks",
  "rating": 3,
  "description": "Sed ante. Vivamus tortor.",
  "name": "ullamcorper purus sit amet nulla quisque",
  "avatar": "https://robohash.org/quiautet.png?size=50x50&set=set1"
}, {
  "id": "838b8d74-5329-42f3-9bdb-4de88497984f",
  "author": "Sharon Stevens",
  "rating": 5,
  "description": "Nullam sit amet turpis elementum ligula vehicula consequat.",
  "name": "sed tincidunt eu felis fusce posuere",
  "avatar": "https://robohash.org/doloristedolorum.jpg?size=50x50&set=set1"
}, {
  "id": "70bb2ddb-1ae3-417c-84a2-ecdf1675fcba",
  "author": "Aaron Dixon",
  "rating": 6,
  "description": "Duis ac nibh.",
  "name": "quam sollicitudin",
  "avatar": "https://robohash.org/minimaautquas.jpg?size=50x50&set=set1"
}, {
  "id": "a2d45798-f315-4cd5-9481-37cce64850c5",
  "author": "Earl Bennett",
  "rating": 1,
  "description": "In sagittis dui vel nisl. Duis ac nibh.",
  "name": "vestibulum rutrum rutrum neque",
  "avatar": "https://robohash.org/errorprovidentnesciunt.png?size=50x50&set=set1"
}, {
  "id": "4b9657f6-a2eb-4ea9-aa86-43d93cbc7b3e",
  "author": "Eugene Gutierrez",
  "rating": 3,
  "description": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis.",
  "name": "non velit nec nisi",
  "avatar": "https://robohash.org/natussaepeenim.jpg?size=50x50&set=set1"
}, {
  "id": "ac01af06-17b8-4cce-af19-df3d56ed9b8f",
  "author": "Craig Diaz",
  "rating": 1,
  "description": "Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.",
  "name": "quisque",
  "avatar": "https://robohash.org/solutadolorqui.jpg?size=50x50&set=set1"
}, {
  "id": "66574916-3b69-4965-bc14-cce8f3b9affd",
  "author": "Bruce Boyd",
  "rating": 2,
  "description": "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.",
  "name": "amet lobortis sapien sapien non",
  "avatar": "https://robohash.org/velitquaeratet.bmp?size=50x50&set=set1"
}, {
  "id": "8bc35485-605b-4e6b-b7cb-ef139fc9cb77",
  "author": "Marie Burke",
  "rating": 3,
  "description": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
  "name": "sem sed sagittis nam congue",
  "avatar": "https://robohash.org/eaqueitaqueharum.png?size=50x50&set=set1"
}, {
  "id": "9811a1ef-fa79-453d-893a-85836f44e69c",
  "author": "Daniel Smith",
  "rating": 2,
  "description": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
  "name": "tortor risus dapibus augue vel accumsan",
  "avatar": "https://robohash.org/perferendistemporeharum.png?size=50x50&set=set1"
}, {
  "id": "c905eba6-1ef9-486a-9cc9-da6ca5ef7987",
  "author": "Lillian Little",
  "rating": 6,
  "description": "Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.",
  "name": "sagittis nam congue risus",
  "avatar": "https://robohash.org/natusoccaecatirepellendus.bmp?size=50x50&set=set1"
}, {
  "id": "22df3de6-369c-45cd-b76b-757be152d841",
  "author": "Rose Reid",
  "rating": 4,
  "description": "Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
  "name": "eu massa donec",
  "avatar": "https://robohash.org/molestiasexercitationemaut.png?size=50x50&set=set1"
}, {
  "id": "816d0e49-9627-46b8-b5f5-d9585140300a",
  "author": "Victor Fox",
  "rating": 3,
  "description": "Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
  "name": "rutrum ac lobortis",
  "avatar": "https://robohash.org/voluptatemfugiatexercitationem.bmp?size=50x50&set=set1"
}, {
  "id": "da2c0c64-dea8-4c18-9da7-e3a71c42b212",
  "author": "Kenneth Mills",
  "rating": 7,
  "description": "Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.",
  "name": "quis justo maecenas rhoncus",
  "avatar": "https://robohash.org/assumendaomniset.png?size=50x50&set=set1"
}, {
  "id": "34095864-cf43-4563-9dae-36d8418b634a",
  "author": "Kathy Murray",
  "rating": 5,
  "description": "Praesent id massa id nisl venenatis lacinia.",
  "name": "fusce posuere felis sed lacus",
  "avatar": "https://robohash.org/etanimiofficiis.png?size=50x50&set=set1"
}, {
  "id": "d50a52a8-aabb-4078-915b-8b8fd7492f90",
  "author": "Brenda Banks",
  "rating": 10,
  "description": "Donec quis orci eget orci vehicula condimentum.",
  "name": "aliquet at feugiat non",
  "avatar": "https://robohash.org/oditplaceatoptio.bmp?size=50x50&set=set1"
}, {
  "id": "9aba2594-f0eb-4837-8069-cf85c5e60e2e",
  "author": "Jacqueline Spencer",
  "rating": 1,
  "description": "Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.",
  "name": "lacus at velit vivamus vel nulla eget",
  "avatar": "https://robohash.org/minimalaboriosamullam.png?size=50x50&set=set1"
}, {
  "id": "2af7ea1b-ad39-4926-ad4c-e31227ecd670",
  "author": "Frank Rivera",
  "rating": 9,
  "description": "Integer ac leo. Pellentesque ultrices mattis odio.",
  "name": "lectus aliquam sit amet",
  "avatar": "https://robohash.org/perspiciatisessedoloremque.png?size=50x50&set=set1"
}, {
  "id": "7f4e0d61-8bcd-409b-b84e-cff2a8e28479",
  "author": "Alice Barnes",
  "rating": 3,
  "description": "Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
  "name": "sociis natoque",
  "avatar": "https://robohash.org/veritatisexplicaboest.png?size=50x50&set=set1"
}, {
  "id": "519ccc94-74a8-4f8e-a3e1-dcc9ee459404",
  "author": "Craig Gibson",
  "rating": 5,
  "description": "Vivamus vel nulla eget eros elementum pellentesque.",
  "name": "ut rhoncus aliquet pulvinar",
  "avatar": "https://robohash.org/quidoloresodit.jpg?size=50x50&set=set1"
}, {
  "id": "be1e7bc9-0906-408c-bba3-8129c034a102",
  "author": "Patrick Hunter",
  "rating": 7,
  "description": "Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
  "name": "vestibulum ante ipsum",
  "avatar": "https://robohash.org/eumquasomnis.bmp?size=50x50&set=set1"
}, {
  "id": "15a9800b-4aac-40b9-9805-e9b4b576ada8",
  "author": "Nicholas Coleman",
  "rating": 6,
  "description": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
  "name": "sit amet diam in magna",
  "avatar": "https://robohash.org/autemfugitalias.png?size=50x50&set=set1"
}, {
  "id": "1bc57c8e-19f7-40ba-9490-e173bb922e52",
  "author": "Ernest Nelson",
  "rating": 1,
  "description": "Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.",
  "name": "placerat ante",
  "avatar": "https://robohash.org/sequiexcepturiut.jpg?size=50x50&set=set1"
}, {
  "id": "3c969100-1992-44c6-85be-c29203c2c535",
  "author": "Jimmy Murray",
  "rating": 3,
  "description": "Phasellus id sapien in sapien iaculis congue.",
  "name": "in hac habitasse platea dictumst etiam faucibus",
  "avatar": "https://robohash.org/quibusdamdolorerem.png?size=50x50&set=set1"
}, {
  "id": "a0619385-2e7f-4bb7-b426-f1da0070e9b3",
  "author": "Joyce Ferguson",
  "rating": 7,
  "description": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.",
  "name": "tellus",
  "avatar": "https://robohash.org/etfacilisquo.jpg?size=50x50&set=set1"
}, {
  "id": "70e6d66d-87bb-4914-8462-23557a0e316c",
  "author": "Philip Ross",
  "rating": 6,
  "description": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque.",
  "name": "euismod scelerisque quam turpis",
  "avatar": "https://robohash.org/nobisvoluptatemnam.bmp?size=50x50&set=set1"
}, {
  "id": "d1486621-09a8-4807-b2fc-92bf04e3ad5b",
  "author": "Carol Flores",
  "rating": 7,
  "description": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
  "name": "mi nulla ac enim in",
  "avatar": "https://robohash.org/veritatislaudantiumprovident.bmp?size=50x50&set=set1"
}, {
  "id": "c6daa5e6-fc8d-492d-842d-5c211e977dbc",
  "author": "Albert Griffin",
  "rating": 10,
  "description": "Morbi non quam nec dui luctus rutrum.",
  "name": "fringilla rhoncus mauris enim",
  "avatar": "https://robohash.org/providentrepellatmollitia.jpg?size=50x50&set=set1"
}, {
  "id": "3725287e-60d5-4bed-b54f-d2ab62fb8e67",
  "author": "Julia Fox",
  "rating": 10,
  "description": "Etiam justo. Etiam pretium iaculis justo.",
  "name": "vulputate nonummy maecenas tincidunt lacus",
  "avatar": "https://robohash.org/autemquiest.png?size=50x50&set=set1"
}, {
  "id": "8e533ee3-8503-4d14-bdf9-ea00eea96053",
  "author": "Robin Porter",
  "rating": 3,
  "description": "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.",
  "name": "sollicitudin ut suscipit a feugiat",
  "avatar": "https://robohash.org/laboriosamsitut.jpg?size=50x50&set=set1"
}, {
  "id": "f9b2673a-4251-4c29-a32d-c341d002658d",
  "author": "Randy Greene",
  "rating": 6,
  "description": "Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
  "name": "at turpis a",
  "avatar": "https://robohash.org/doloribusperspiciatisut.jpg?size=50x50&set=set1"
}, {
  "id": "8efdcf58-26ea-4c8b-bcce-cc8e53a4863e",
  "author": "Terry Lawson",
  "rating": 6,
  "description": "In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
  "name": "in quis justo",
  "avatar": "https://robohash.org/estestet.bmp?size=50x50&set=set1"
}, {
  "id": "727cf648-5a88-4d0c-8083-132fd2fd4113",
  "author": "Joe Payne",
  "rating": 2,
  "description": "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
  "name": "interdum mauris non ligula pellentesque ultrices phasellus",
  "avatar": "https://robohash.org/atqueveliteveniet.bmp?size=50x50&set=set1"
}, {
  "id": "2670deb8-8365-4e27-9c3e-d05f2fed0998",
  "author": "Andrea Welch",
  "rating": 7,
  "description": "Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.",
  "name": "cursus urna",
  "avatar": "https://robohash.org/temporeestet.bmp?size=50x50&set=set1"
}, {
  "id": "b963774e-33cf-42b1-9db5-f18d76eb79d2",
  "author": "Ann Stone",
  "rating": 2,
  "description": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla.",
  "name": "nulla integer pede justo lacinia",
  "avatar": "https://robohash.org/temporeautemveritatis.jpg?size=50x50&set=set1"
}, {
  "id": "43a95d4c-19ca-4d41-a289-014e2c53cfdd",
  "author": "Billy Romero",
  "rating": 8,
  "description": "Cras pellentesque volutpat dui.",
  "name": "et magnis",
  "avatar": "https://robohash.org/hicetvel.bmp?size=50x50&set=set1"
}, {
  "id": "61f9098b-5878-4f94-bc32-9521091c7387",
  "author": "Adam Webb",
  "rating": 8,
  "description": "Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.",
  "name": "lorem integer tincidunt ante",
  "avatar": "https://robohash.org/aquidemquis.bmp?size=50x50&set=set1"
}, {
  "id": "edd73226-5ff8-40e4-a446-8697933bfdfd",
  "author": "Russell Alexander",
  "rating": 1,
  "description": "Nulla facilisi. Cras non velit nec nisi vulputate nonummy.",
  "name": "dolor vel est donec odio justo",
  "avatar": "https://robohash.org/iureundeiusto.bmp?size=50x50&set=set1"
}, {
  "id": "ed6862f5-d4ab-4804-a1d6-4f5048445f8c",
  "author": "Marilyn Medina",
  "rating": 2,
  "description": "Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.",
  "name": "porttitor",
  "avatar": "https://robohash.org/rerummolestiaefacilis.png?size=50x50&set=set1"
}, {
  "id": "ed300def-6dff-40be-8cbd-29c5f776f6cc",
  "author": "Scott Ward",
  "rating": 2,
  "description": "Duis bibendum.",
  "name": "vitae nisi nam ultrices",
  "avatar": "https://robohash.org/estsolutaveritatis.jpg?size=50x50&set=set1"
}, {
  "id": "fdb0a8f1-b2b0-4d2f-92d9-cd48664b0281",
  "author": "Patrick Bennett",
  "rating": 9,
  "description": "Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.",
  "name": "lobortis vel dapibus",
  "avatar": "https://robohash.org/ducimusnisilaborum.png?size=50x50&set=set1"
}, {
  "id": "61b51f41-d192-449a-922c-dab386539623",
  "author": "Lawrence Gonzalez",
  "rating": 6,
  "description": "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.",
  "name": "ac lobortis vel dapibus at diam nam",
  "avatar": "https://robohash.org/eoscorporisnesciunt.jpg?size=50x50&set=set1"
}, {
  "id": "c54f3793-8f8c-4060-9fc3-aa8b237dedf2",
  "author": "Norma Griffin",
  "rating": 2,
  "description": "Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  "name": "id",
  "avatar": "https://robohash.org/abautsit.png?size=50x50&set=set1"
}, {
  "id": "219eb43c-f397-4fc5-a9db-5b21bbadce8d",
  "author": "Kenneth Turner",
  "rating": 6,
  "description": "Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.",
  "name": "erat curabitur gravida nisi at nibh",
  "avatar": "https://robohash.org/voluptatemdoloremqueadipisci.bmp?size=50x50&set=set1"
}, {
  "id": "2a3fdba2-a7e0-46df-859a-f51c8163bc7c",
  "author": "Kimberly Wood",
  "rating": 2,
  "description": "Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.",
  "name": "sapien urna pretium",
  "avatar": "https://robohash.org/ducimuscumqueea.bmp?size=50x50&set=set1"
}, {
  "id": "68544ce4-bddd-445f-a824-d7d96aca98ba",
  "author": "Marie Lane",
  "rating": 6,
  "description": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
  "name": "diam erat",
  "avatar": "https://robohash.org/assumendaveritatiset.jpg?size=50x50&set=set1"
}, {
  "id": "5d2676bb-ab3e-4c3e-9600-1343e0d11216",
  "author": "Brian Gutierrez",
  "rating": 5,
  "description": "In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.",
  "name": "sit amet justo morbi",
  "avatar": "https://robohash.org/utabdolores.jpg?size=50x50&set=set1"
}, {
  "id": "4228fa73-38ff-44b2-9dd8-0b1de078880d",
  "author": "Clarence Price",
  "rating": 3,
  "description": "Curabitur convallis.",
  "name": "in blandit ultrices enim lorem ipsum",
  "avatar": "https://robohash.org/nihilnatusaut.bmp?size=50x50&set=set1"
}, {
  "id": "69186a7a-05a3-46d1-9f0b-cdf684376f17",
  "author": "Shawn Cox",
  "rating": 7,
  "description": "Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst.",
  "name": "id sapien",
  "avatar": "https://robohash.org/doloremeumquia.jpg?size=50x50&set=set1"
}, {
  "id": "1a18bf80-c9eb-4f60-8677-4f4382f5f57b",
  "author": "Michael Hanson",
  "rating": 8,
  "description": "Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
  "name": "vivamus",
  "avatar": "https://robohash.org/temporibusestlibero.jpg?size=50x50&set=set1"
}, {
  "id": "06898916-d696-4e87-af4b-44a311018f60",
  "author": "Arthur Perez",
  "rating": 2,
  "description": "Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.",
  "name": "auctor gravida sem praesent id massa id",
  "avatar": "https://robohash.org/nequeconsequaturquam.png?size=50x50&set=set1"
}, {
  "id": "dd6f3819-e419-407a-b786-6e34f9587932",
  "author": "Shirley Sanchez",
  "rating": 2,
  "description": "Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
  "name": "tincidunt in",
  "avatar": "https://robohash.org/eumiddolore.jpg?size=50x50&set=set1"
}, {
  "id": "045a29bc-9aba-473c-b7a0-d9f541d69795",
  "author": "Joan Austin",
  "rating": 9,
  "description": "Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.",
  "name": "nulla mollis molestie lorem quisque",
  "avatar": "https://robohash.org/quaequiaplaceat.png?size=50x50&set=set1"
}, {
  "id": "01bce95f-db5a-4438-8e4e-2798f89c10e0",
  "author": "Carol Stone",
  "rating": 3,
  "description": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
  "name": "semper sapien",
  "avatar": "https://robohash.org/vitaeillumin.bmp?size=50x50&set=set1"
}, {
  "id": "91890378-cadb-48bd-a0e7-26fb6002286c",
  "author": "Shirley Dean",
  "rating": 3,
  "description": "Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
  "name": "congue",
  "avatar": "https://robohash.org/harumreiciendisquae.jpg?size=50x50&set=set1"
}, {
  "id": "f47c7709-cc4d-4c30-b659-8591eb95b826",
  "author": "Judy Lynch",
  "rating": 3,
  "description": "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.",
  "name": "est quam pharetra magna ac consequat",
  "avatar": "https://robohash.org/repellatcumquepraesentium.bmp?size=50x50&set=set1"
}, {
  "id": "cc8cd663-00d6-4921-bb7d-aa5f976909d1",
  "author": "Wayne Campbell",
  "rating": 10,
  "description": "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
  "name": "ac est lacinia nisi venenatis",
  "avatar": "https://robohash.org/inciduntvoluptatemsuscipit.jpg?size=50x50&set=set1"
}, {
  "id": "d2b7bbf0-a5fd-408b-a0be-9b425f793eea",
  "author": "Deborah Johnston",
  "rating": 6,
  "description": "Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.",
  "name": "sapien ut nunc vestibulum",
  "avatar": "https://robohash.org/maioressolutasint.bmp?size=50x50&set=set1"
}, {
  "id": "0f796bd4-9245-4597-85e2-b56b40974f0d",
  "author": "David Harris",
  "rating": 2,
  "description": "Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.",
  "name": "amet sem fusce consequat nulla nisl",
  "avatar": "https://robohash.org/itaquequiaexercitationem.bmp?size=50x50&set=set1"
}, {
  "id": "612bf306-a766-445b-bbc4-efec2af9ab21",
  "author": "Mark Crawford",
  "rating": 5,
  "description": "Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
  "name": "mattis nibh ligula nec sem",
  "avatar": "https://robohash.org/quiautducimus.bmp?size=50x50&set=set1"
}];
    return list;
  }
})();


