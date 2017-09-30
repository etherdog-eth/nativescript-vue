const Vue = require('./nativescript-vue')

new Vue({
    template: `
        <page>
            <list-view :items="items">
                <template scope="item">
                    <flexbox-layout class="line">
                        <label :text="item.$index" ></label>
                        <label :text="item.text" ></label>
                        <label :text="item.user.name" ></label>
                        <label :text="item.user.meta.age" ></label>
                    </flexbox-layout>
                </template>
            </list-view>
        </page>
    `,
    data: {
        items: [
            {
                text: 'text 1',
                user: { name: 'John', meta: { age: 10 } }
            },
            {
                text: 'text 2',
                user: { name: 'Lucy', meta: { age: 14 } }
            },
            {
                text: 'text 3',
                user: { name: 'Nick', meta: { age: 10 }}
            }
        ]
    }
}).$start()
