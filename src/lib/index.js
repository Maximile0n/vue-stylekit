import Vue from "vue";
import VeeValidate from "vee-validate";
import styles from "./css/vue-rt-style.styl";
import Global from "./variables.json";
import Project from "../../package.json";
import * as svgicon from 'vue-svgicon';

import {
  Button,
  ButtonRippleWithoutJs,
  ButtonWithoutRipple,
  Checkbox,
  CheckboxContainer,
  Input,
  InputWithoutJs,
  Price,
  RadioButton,
  RadioButtonContainer,
  Ripple,
  RippleWihoutJs,
  Select,
  SelectOption,
  SelectWithoutJs,
  Spinner,
  Switch,
  SwitchContainer,
  Textarea,
  TextareaStatic,
  ScrollTabs,
  Annotation,
  ColorLineText,
  Banner,
  BannerItem,
  BannerPaginatorItem,
  Carousel,
  CarouselSlide,
  Card,
  CardB2o,
  CardBuy,
  CardImage,
  CardImageList,
  FullscreenImage,
  RowList,
  RowListItem,
  Table,
  TableCol,
  TableHeadItem,
  TableItem,
  TableRow,
  DownloadContent,
  InlineDropdown,
  InlineDropdownItem,
  Tag,
  TagsList,
  Filter,
  FilterWatcher,
  FilterCaller,
  Youtube,
  Sticky,
  StickyBottomLine,
  ResizeContentHeight,
  Popup,
  Logo,
  LogoCoBranding,
  LinksBlock,
  Hint,
  BannerVideoGameControl,
  SlideContent,
  SlideContentDottedContent,
  SlideContentDottedHeader,
  Icon,
  Slide,
  Swiper,
  Pattern,
  Opportunity,
  OpportunityItem,
  UnWrapper,
  RealPopup,
  Ussd,
  Tabs,
  TabsNavigationItem,
  TabsContentItem,
  UseCase,
  ProductCard,
  ValidationIcon,
  TariffCard,
  BenefitItem,
  BenefitBlock,
  PortraitTile,
  PortraitTileItem,
  Timeline,
  TimelineItem,
  ScrollBar,
  VerticalScrollBar,
  ReplacementLink,
  CardCarousel,
  CardLayout,
  GalleryCarousel,
  GalleryCarouselItem,
  OptionsList,
  OptionsListInfoItem,
  GameArrow,
  CheckboxTabs,
  CountdownTimer
} from "./components";

// console.info('OptionsList',OptionsList)
import { SwipeLeft, SwipeRight } from "./directives/Swipe/swipe";
import { OutsideClickDirective } from "./directives/OudsideClick/OudsideClick";
import { SlideContentVerticalDirective } from "./directives/SlideContent/SlideContentVertical";
import { ScrollToOnClickDirective } from "./directives/ScrollToOnClick/ScrollToOnClick";
import 'element-closest-polyfill';
import 'nodelist-foreach-polyfill';
import 'element-remove';
const VueRtStyle = {
  install(Vue, config) {
    if (!Vue.RtStyle) {

      if (window && window[Global.globalSettingsKey] && window[Global.globalSettingsKey].useValidator) {
        Vue.use(VeeValidate)
      }

      Vue.component(Button.name, Button);
      Vue.component(ButtonRippleWithoutJs.name, ButtonRippleWithoutJs);
      Vue.component(ButtonWithoutRipple.name, ButtonWithoutRipple);
      Vue.component(Checkbox.name, Checkbox);
      Vue.component(CheckboxContainer.name, CheckboxContainer);
      Vue.component(Input.name, Input);
      Vue.component(InputWithoutJs.name, InputWithoutJs);
      Vue.component(Price.name, Price.component);
      Vue.component(RadioButton.name, RadioButton);
      Vue.component(RadioButtonContainer.name, RadioButtonContainer);
      Vue.component(Ripple.name, Ripple);
      Vue.component(RippleWihoutJs.name, RippleWihoutJs);
      Vue.component(Select.name, Select);
      Vue.component(SelectOption.name, SelectOption);
      Vue.component(SelectWithoutJs.name, SelectWithoutJs);
      Vue.component(Spinner.name, Spinner);
      Vue.component(Switch.name, Switch);
      Vue.component(SwitchContainer.name, SwitchContainer);
      Vue.component(Textarea.name, Textarea);
      Vue.component(TextareaStatic.name, TextareaStatic);
      Vue.component(ScrollTabs.name, ScrollTabs.component);
      Vue.component(Annotation.name, Annotation);
      Vue.component(ColorLineText.name, ColorLineText);
      Vue.component(Card.name, Card);
      Vue.component(CardBuy.name, CardBuy);
      Vue.component(CardImage.name, CardImage);
      Vue.component(CardImageList.name, CardImageList);
      Vue.component(Banner.name, Banner);
      Vue.component(BannerItem.name, BannerItem);
      Vue.component(BannerPaginatorItem.name, BannerPaginatorItem);
      Vue.component(BannerVideoGameControl.name, BannerVideoGameControl);
      Vue.component(FullscreenImage.name, FullscreenImage);
      Vue.component(RowList.name, RowList);
      Vue.component(RowListItem.name, RowListItem);
      Vue.component(Table.name, Table);
      Vue.component(TableCol.name, TableCol);
      Vue.component(TableHeadItem.name, TableHeadItem);
      Vue.component(TableItem.name, TableItem);
      Vue.component(TableRow.name, TableRow);
      Vue.component(DownloadContent.name, DownloadContent);
      Vue.component(InlineDropdown.name, InlineDropdown);
      Vue.component(InlineDropdownItem.name, InlineDropdownItem);
      Vue.component(Tag.name, Tag);
      Vue.component(TagsList.name, TagsList);
      Vue.component(Filter.name, Filter);
      Vue.component(FilterWatcher.name, FilterWatcher);
      Vue.component(OptionsList.name, OptionsList);
      Vue.component(OptionsListInfoItem.name, OptionsListInfoItem);
      Vue.component(FilterCaller.name, FilterCaller);
      Vue.component(Sticky.name, Sticky);
      Vue.component(StickyBottomLine.name, StickyBottomLine);
      Vue.component(ResizeContentHeight.name, ResizeContentHeight);
      Vue.component(Youtube.name, Youtube);
      Vue.component(Popup.name, Popup);
      Vue.component(LinksBlock.name, LinksBlock);
      Vue.component(Hint.name, Hint);
      Vue.component(GameArrow.name, GameArrow);
      Vue.use(svgicon);
      Vue.component(Icon.name, Icon);
      Vue.component(Logo.name, Logo.component);
      Vue.component(Ussd.name, Ussd.component);
      Vue.component(Swiper.name, Swiper);
      Vue.component(Slide.name, Slide);
      Vue.component(Pattern.name, Pattern);
      Vue.component(Opportunity.name, Opportunity);
      Vue.component(OpportunityItem.name, OpportunityItem);
      Vue.component(UnWrapper.name, UnWrapper);
      Vue.component(RealPopup.name, RealPopup);
      Vue.component(UseCase.name, UseCase);
      Vue.component(BenefitBlock.name, BenefitBlock);
      Vue.component(BenefitItem.name, BenefitItem);
      Vue.component(PortraitTile.name, PortraitTile);
      Vue.component(PortraitTileItem.name, PortraitTileItem);
      Vue.component(Timeline.name, Timeline);
      Vue.component(TimelineItem.name, TimelineItem);
      Vue.component(ScrollBar.name, ScrollBar);
      Vue.component(VerticalScrollBar.name, VerticalScrollBar);
      Vue.component(ReplacementLink.name, ReplacementLink);
      Vue.component(Carousel.name, Carousel);
      Vue.component(CarouselSlide.name, CarouselSlide);
      Vue.component(CardCarousel.name, CardCarousel);
      Vue.component(CardB2o.name, CardB2o);
      Vue.component(CardLayout.name, CardLayout);
      Vue.component(CountdownTimer.name, CountdownTimer);

      // tsx components

      // Vue.component(Carousel.name, Carousel.component);
      // Vue.component(CarouselSlide.name, CarouselSlide.component);

      Vue.component(Tabs.name, Tabs);
      Vue.component(CheckboxTabs.name, CheckboxTabs);
      Vue.component(TabsContentItem.name, TabsContentItem);
      Vue.component(TabsNavigationItem.name, TabsNavigationItem);
      Vue.component(GalleryCarousel.name, GalleryCarousel.component);
      Vue.component(GalleryCarouselItem.name, GalleryCarouselItem.component);
      Vue.component(LogoCoBranding.name, LogoCoBranding.component);
      Vue.component(ProductCard.name, ProductCard.component);
      Vue.component(TariffCard.name, TariffCard.component);
      Vue.component(ValidationIcon.name, ValidationIcon.component);
      Vue.component(SlideContent.name, SlideContent.component);
      Vue.component(SlideContentDottedContent.name, SlideContentDottedContent.component);
      Vue.component(SlideContentDottedHeader.name, SlideContentDottedHeader.component);
      Vue.directive(SwipeLeft.name, SwipeLeft);
      Vue.directive(SwipeRight.name, SwipeRight);


      Vue.directive(OutsideClickDirective.name, OutsideClickDirective);
      Vue.directive(
        SlideContentVerticalDirective.name,
        SlideContentVerticalDirective
      );
      Vue.directive(
        ScrollToOnClickDirective.name,
        ScrollToOnClickDirective
      );

      Vue.RtStyle = true;
      Vue.config.test = true;
    }
  }
};
// VueRtStyle.directives = { SwipeLeft, SwipeRight, OutsideClickDirective, FilterCallerDirective};
VueRtStyle.directives = { SwipeLeft, SwipeRight, OutsideClickDirective };

// if(localStorage && localStorage.getItem('dev_mode')){
//   localStorage.setItem('dev_mode__version',version);
// }

/**
 * Глобальные настройки библиотеки
 * -Для добавления своих настроек, создайте объект
 * с названием из Global.globalSettingsKey и положите перед подключением либы
 */
const settingsKey = Global.globalSettingsKey;
const version = Project.version;
if (settingsKey) {
  if (!window[settingsKey]) window[settingsKey] = {}
  if (!window[settingsKey].segment) window[settingsKey].segment = Global.defaultSegment
  window[settingsKey].version = version;
}

// @Deprecated
window.RTK_STYLE_VER = version;
VueRtStyle.version = version;

export default VueRtStyle;
