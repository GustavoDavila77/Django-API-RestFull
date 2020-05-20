import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ListBook from '@/components/Book/ListBook'
import EditBook from '@/components/Book/EditBook'
import DeleteBook from '@/components/Book/DeleteBook'
import NewBook from '@/components/Book/NewBook'
import ListWorkShop from '@/components/WorkShop/ListWorkShop'
import EditWorkShop from '@/components/WorkShop/EditWorkShop'
import DeleteWorkShop from '@/components/WorkShop/DeleteWorkShop'
import NewWorkShop from '@/components/WorkShop/NewWorkShop'
import ViewWorkShop from '@/components/WorkShop/ViewWorkShop'




Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },

    {
      path: '/books',
      name: 'ListBook',
      component: ListBook
    },
    {
      path: '/books/:bookId/edit',
      name: 'EditBook',
      component: EditBook
    },
    {
      path: '/books/:bookId/delete',
      name: 'DeleteBook',
      component: DeleteBook
    },
    {
      path: '/books/new',
      name: 'NewBook',
      component: NewBook
    },
    {
      path: '/workshops/',
      name: 'ListWorkShop',
      component: ListWorkShop
    },
    {
      path: '/workshops/:workshopId/edit',
      name: 'EditWorkShop',
      component: EditWorkShop
    },
    {
      path: '/workshops/:workshopId/delete',
      name: 'DeleteWorkShop',
      component: DeleteWorkShop
    },
    {
      path: '/workshops/new',
      name: 'NewWorkShop',
      component: NewWorkShop
    },
    {
      path: '/workshops/:workshopId/view',
      name: 'ViewWorkShop',
      component: ViewWorkShop
    }
  ],
  mode: 'history'
})
