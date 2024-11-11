import type { Obj } from '@/model'
import {
  Select,
  Input,
  InputNumber,
  RadioGroup,
  Switch,
  CheckboxGroup,
  DatePicker,
  Textarea
} from 'ant-design-vue'
import type { Component } from 'vue'
import MaterialGrid from '../components/MaterialGrid.vue'
import MaterialCard from '../components/MaterialCard.vue'
import MaterialDivider from '../components/MaterialDivider.vue'
import MaterialCollapse from '../components/MaterialCollapse.vue'

export default <Obj<Component>>{
  input: Input,
  select: Select,
  radio: RadioGroup,
  switch: Switch,
  number: InputNumber,
  checkbox: CheckboxGroup,
  grid: MaterialGrid,
  card: MaterialCard,
  date: DatePicker,
  divider: MaterialDivider,
  collapse: MaterialCollapse,
  textarea: Textarea
}
