<script setup>
    import demo1 from './demo1.vue'
    import demo2 from './demo2.vue'
    import demo3 from './demo3.vue'
    import demo4 from './demo4.vue'
    import demo5 from './demo5.vue'
    import preview from '@/components/preview.vue'
</script>
## 按钮Button

按钮用来触发一些操作。
### 演示
<div class="container">
    <div class="container-gird">
        <div class="source">
            <p class="z-text-fs18">基础</p>
            <p class="z-text">按钮的 type 分别为 
                <code class="z-text--code">default</code>、
                <code class="z-text--code">primary</code>、
                <code class="z-text--code">success</code>、
                <code class="z-text--code">error</code>、
                <code class="z-text--code">info</code>、
                <code class="z-text--code">warning</code>、
                <code class="z-text--code">text</code>。
            </p>
            <demo1/>
            <preview compName="button" demoName="demo1"></preview>
        </div>
        <div class="source">
            <p class="z-text-fs18">不同的尺寸</p>
            <p class="z-text">额外的尺寸：
                <code class="z-text--code">medium</code>、
                <code class="z-text--code">small</code>、
                <code class="z-text--code">mini</code>、
                通过设置size属性来配置它们。
            </p>
            <demo2/>
            <preview compName="button" demoName="demo2"></preview>
        </div>
        <div class="source">
            <p class="z-text-fs18">禁用状态</p>
            <p class="z-text">按钮可以被禁用。
            </p>
            <demo5/>
            <preview compName="button" demoName="demo5"></preview>
        </div>
    </div>
    <div class="container-gird">
        <div class="source">
            <p class="z-text-fs18">图标按钮</p>
            <p class="z-text">在按钮上使用图标，通过设置
                <code class="z-text--code">leftIcon</code>、
                <code class="z-text--code">rightIcon</code>
                属性来配置图标的位置。
            </p>
            <demo3/>
            <preview compName="button" demoName="demo3"></preview>
        </div>
        <div class="source">
            <p class="z-text-fs18">加载ing...</p>
            <p class="z-text">要设置为 loading 状态，只要设置 <code class="z-text--code">loading</code> 属性为true即可。
            </p>
            <demo4/>
            <preview compName="button" demoName="demo4"></preview>
        </div>
    </div>
</div>

<br/>


## API
| 参数   | 类型    | 说明         | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| type  | string    | 类型      |   primary / success / warning / error / info / text |     —    |
| size  | string   | 尺寸     |   medium / small / mini            |    —     |
| round | boolean    | 是否圆角按钮       | — | false   |
| circle  | boolean   | 是否圆形按钮       | — | false   |
| loading  | boolean   | 是否加载中状态       | — | false   |
| disabled | boolean | 是否禁用状态       | —   | false   |
| leftIcon | string | 图标按钮，并且icon展示在左侧    | 参考图标库 |  —  |
| rightIcon  | string | 图标按钮，并且icon展示在右侧    |  参考图标库  |  —  |

<br/>
