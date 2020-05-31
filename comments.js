var localMessages = {};

document.getElementById('comments').innerHTML = `<div id="commentInput">
    <input id="commentName" type="text" placeholder="John Smith"><br/>
    <textarea id="commentMessage" placeholder="Your message here"></textarea><br/>
    <button onclick="submitComment()">Submit Comment</button></div>
    <div id="commentList"></div>`;

function getComments() {
    console.log('getting messages')
    console.log(blogPubKey)
    gun.get('~'+blogPubKey).get('comments').get(location.pathname).map().once((node, hash) => {
        console.log(node)
        localMessages[hash] = node;
        renderList();
    })
}

function renderList() {
    var messageList = document.getElementById('commentList');
    messageList.innerHTML = '';
    for (let [hash, node] of Object.entries(localMessages)) {
        if (node !== null) {
            var message = document.createElement('p');
                message.innerText = node.message;
            var author = document.createElement('p');
                author.innerText = `Sincerely, ${node.authorName}`;
            var time = document.createElement('p');
                time.classList = "messageMeta"
                time.innerText = `${node.timestamp}`;
            var reply = document.createElement('p');
                reply.classList = "commentReply"
                reply.innerText = node.reply;
            var item = document.createElement('li');
                item.id = hash;
                item.appendChild(time);
                item.appendChild(message);
                item.appendChild(author);
                item.appendChild(reply);
            messageList.appendChild(item);
        }
    }
}

async function submitComment() {
    var name = document.getElementById('commentName').value;
    var message = document.getElementById('commentMessage').value;

    var currentDate = new Date();
    var currentTime = currentDate.toUTCString();
    var currentMonth = currentDate.getMonth() + 1;
    var currentYear = currentDate.getFullYear();

    var throw_away = await SEA.pair();
    if (name.length < 1) { name = `Anon ${throw_away.pub.slice(-10)}` }
    var shared = await SEA.secret(blogEPubKey, throw_away);
    console.log(shared);
    var data = {page: location.pathname, message: message, authorName: name, timestamp: currentTime};
    var encData = await SEA.encrypt(data, shared);
    var payload = JSON.stringify({msg: encData, epub: throw_away.epub});        
    var hash = await SEA.work(payload, null, null, {name: "SHA-256"});
    
    console.log('payload',payload)
    console.log(`hash: ${hash}`)
    console.log(`to: @${blogPubKey}#`)
    gun.get(`@${blogPubKey}/${currentYear}-${currentMonth}#`).get(hash).put(payload);

    document.getElementById('commentName').value = '';
    document.getElementById('commentMessage').value = '';
}