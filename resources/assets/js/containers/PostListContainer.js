import { connect } from 'react-redux'
import { deletePost } from 'actions'
import PostList from 'components/PostList'

const mapStateToProps = (state) => ({
	posts: state.posts
})

const mapDispatchToProps = {
	deletePost
}

const PostListContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(PostList);

export default PostListContainer