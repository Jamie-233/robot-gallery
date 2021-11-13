// 定义css的声明
// import .css 文件 都会遵循以下的约定
declare module '*.css' {
    // 导出Key所在的对象
    const css: { [key: string]: string };
    export default css;
}