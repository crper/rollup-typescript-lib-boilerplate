import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

/**
 * 获取当前URL对应的全局变量对象
 * @param url 表示文件的URL字符串
 * @returns 返回一个对象，包含`__filename`和`__dirname`两个属性
 *          `__filename`表示文件的完整路径
 *          `__dirname`表示文件所在目录的路径
 */
export default function getGlobals(url: string) {
  // 将URL转换为文件的完整路径
  const __filename = fileURLToPath(url)
  // 获取文件所在目录的路径
  const __dirname = dirname(__filename)
  return { __filename, __dirname }
}
