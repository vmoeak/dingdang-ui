# 开始使用

请先[安装](#/doc/install)本组件库。

然后在你的代码中写入下面的代码

```javascript
import { Button, Tabs, Switch, Dialog } from "dingdang-ui";
// 记得全局导入css
import "dingdang-ui/dist/lib/dingdang.css";
```

就可以使用我提供的组件了。

## Vue 单文件组件

代码示例：

```vue
<template>
  <div>
    <Button>按钮</Button>
  </div>
</template>
<script>
import { Button } from "dingdang-ui";
import "dingdang-ui/dist/lib/dingdang.css";
export default {
  components: { Button },
};
</script>
```
