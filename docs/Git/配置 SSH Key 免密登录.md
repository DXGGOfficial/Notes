# 配置 SSH Key 免密登录

## 1. 前言

在我们提交代码的时候， Github需要用我们账号对应的公钥去解密我们提交的代码，如果能正确的解密说明当前提交代码的用户合法的。

所以在提交代码事先我们的电脑中需要持有一个私钥我们的github账户中也有持有一个公钥
GitHub配置SSH Key的目的是为了帮助我们在通过git提交代码是，不需要繁琐的验证过程，简化操作流程。

## 2. 生成 .ssh 密钥

```bash
ssh-keygen -t rsa -C dxggofficial@gmail.com​​ 
```

一直按回车键就行了​​

在指定的保存路径（默认是在 `~/.ssh` 路径）下会生成2个名为id_rsa和id_rsa.pub（公钥）的文件：

Linux可以使用cat命令查看

```bash
cat ~/.ssh/id_rsa.pub
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQDRC57mZkVoWLoyMM1MMCMTXS2yI4e/58HMndbZNyh1SmQZICLdvt7iIrMiiB30Mya7tEtL9UPghnl8oOA9OwvEAtVmym5FfxJIKmkRDG1oTOPCdu6bSi1oeiC/dWb8GGBrZZuhukDtZlzkxUZ6OorLT8Dods4REJjDLTmhfExp9K8rBGpxrBpWR2GJEup11h5Jci07JsOjaqYhOibWVKOqqeaF5lca5Bo8rM79MjUHtLPuZP0ewDNrKKabbhxcapnIYrehnu5wpvWL1NZmZlAUxYaKR8PRPnMEOmk5sYUXuTnCIGtVGXPepV+Q4S9o+9xwXHDZQ+6tuOazFRF/OQSja2kFLYS1NHr3A9X0F01dJtWEd8qh+6yId/0TkDlA4DQHTpUMiV0Mi2LLX6Z4PbUgSvsm/C3l3GXmnFVTXXbwTNJ7Z049vSUleszvjF3ZSc5IB1wpJcFChnx/pQNXrlYXZb6BBWxWvh2I8ULXaVNAlGgnOBEF8Dl9HagJueCzTQ7F24yvnOOpzPsUfPaBDl6+OvWPlWHR1YZQmJTC0S/1xGcUo5KoejIWnl5A4pOFWurlD8scprZe8G9g5EHKhQH7AVmBhRnTOispnncqYrhcPL5wAjyw== dxggofficial@gmail.com
```
## 3. 添加公钥到你的Github

再打开你的Github，进入配置页： Settings -- SSH and GPG keys

添加本地生成的ssh Key，选择New SSH key
把内容拷贝到key下面的输入框，并为这个key定义一个名称（通常用来区分不同主机），然后保存

## 4. 测试是否成功

```bash
[root@e96a3a82feff /]# ssh -T git@github.com
Hi DXGGOfficial! You've successfully authenticated, but GitHub does not provide shell access.
```


