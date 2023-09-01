import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  editorConf = {
    menubar: false,
    // skin: 'bootstrap',
    // icons: 'bootstrap',
    language: 'zh_CN',
    plugins: 'preview importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars emoticons bdmap',
    toolbar: 'undo redo formatpainter removeformat | blocks fontfamily fontsize bold italic underline strikethrough forecolor backcolor | numlist bullist outdent indent alignment lineheight | pagebreak | charmap emoticons | fullscreen preview save print | insertfile image media link bdmap',
    toolbar_groups: {
      // formatting: {
      //   text: '文字格式',
      //   tooltip: 'Formatting',
      //   items: 'bold italic underline | superscript subscript',
      // },
      alignment: {
        icon: 'align-left',
        tooltip: 'alignment',
        items: 'alignleft aligncenter alignright alignjustify',
      },
    },
    // fontsize_formats: '12px 14px 16px 18px 24px 36px 48px 56px 72px',
    // font_formats: '微软雅黑=Microsoft YaHei,Helvetica Neue,PingFang SC,sans-serif;苹果苹方=PingFang SC,Microsoft YaHei,sans-serif;宋体=simsun,serif;仿宋体=FangSong,serif;黑体=SimHei,sans-serif;Arial=arial,helvetica,sans-serif;Arial Black=arial black,avant garde;Book Antiqua=book antiqua,palatino;',
    // // branding: false,     // 隐藏右下角技术支持
    // // elementpath: false,  // 隐藏底栏的元素路径
    // statusbar: false,    // 隐藏底部状态栏
    // link_list: [
    //   { title: '预置链接1', value: 'http://www.tinymce.com' },
    //   { title: '预置链接2', value: 'http://tinymce.ax-z.cn' }
    // ],
    // image_list: [
    //   { title: '预置图片1', value: 'https://www.tiny.cloud/images/glyph-tinymce@2x.png' },
    //   { title: '预置图片2', value: 'https://www.baidu.com/img/bd_logo1.png' }
    // ],
    // image_class_list: [
    //   { title: 'None', value: '' },
    //   { title: 'Some class', value: 'class-name' }
    // ],
    // importcss_append: true,
    // //自定义文件选择器的回调内容
    // file_picker_callback: function (callback: any, value: any, meta: any) {
    //   if (meta.filetype === 'file') {
    //     callback('https://www.baidu.com/img/bd_logo1.png', { text: 'My text' });
    //   }
    //   if (meta.filetype === 'image') {
    //     callback('https://www.baidu.com/img/bd_logo1.png', { alt: 'My alt text' });
    //   }
    //   if (meta.filetype === 'media') {
    //     callback('movie.mp4', { source2: 'alt.ogg', poster: 'https://www.baidu.com/img/bd_logo1.png' });
    //   }
    // },
    // toolbar_sticky: true,
    // autosave_ask_before_unload: false,
  };

  onInit(event: any) {
    setTimeout(() => {
      console.log(event.editor.getContent());
    }, 10000);
  }
}
